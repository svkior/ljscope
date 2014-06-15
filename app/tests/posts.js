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
});