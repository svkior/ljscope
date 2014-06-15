/**
 * Created by svkior on 15/06/14.
 */
var assert = require('assert');

suite('Posts', function () {
    test('in the server', function (done, server) {

        server.eval(function () {
            Posts.insert({subject: 'hello title'});
            var docs = Posts.find().fetch();
            emit('docs', docs);
        });

        server.once('docs', function (docs) {
            assert.equal(docs.length, 1);
            done();
        })
    });

    test('both on client and server', function (done, server, client) {

        server.eval(function () {
            Posts.find().observe({
                added: addedNewPost
            });

            function addedNewPost(post) {
                emit('post', post);
            }
        });

        server.once('post', function (post) {
            assert.equal(post.subject, 'hello subject');
            done();
        });

        client.eval(function () {
            Posts.insert({subject: 'hello subject'});
        });

    });

    test('using two clients', function (done, server, c1, c2) {
        c1.eval(function () {
            Posts.find().observe({
                added: addedNewPost
            });

            function addedNewPost(post) {
                emit('post', post);
            }

            emit('done');
        });

        c1.once('post', function (post) {
            assert.equal(post.subject, 'from c2');
            done();
        });

        c1.once('done', function () {
            c2.eval(insertPost);
        });

        function insertPost() {
            Posts.insert({subject: 'from c2'});
        }
    });

});