/**
 * Created by svkior on 16/06/14.
 */
Meteor.publish('posts', function () {
    return Posts.find();
});
