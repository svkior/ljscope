/**
 * Created by svkior on 14.06.14.
 */
Posts = new Meteor.Collection("posts");

Meteor.methods({
    get_journal: function(journalURL){
        console.log(journalURL.url);
        var LiveJournal = Meteor.require("livejournal");
        var events = Async.runSync(function(done) {
            LiveJournal.RPC.getevents({
                journal: journalURL.url,
                auth_method: 'noauth',
                selecttype: 'lastn',
                howmany: 50
            }, function(err, value){

                done(null, value);
            });
        });

        _.each(events.result.events, function(event){
            if (Posts.findOne({"lj.url": event.url}) === undefined){
                console.log("Adding: ", event.url);

                var post = {
                    lj : event
                };
                Posts.insert(post);
            } else {
                console.log("Skip: ", event.url);
            }
        });
        return Posts.findOne()._id;
    }
});