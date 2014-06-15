/*
 * Any sufficiently advanced technology is indistinguishable from magic. - Arthur C. Clarke
 */

/*
 if(Posts.find().count() === 0) {

    var LiveJournal = Meteor.require("livejournal");
    var events = Async.runSync(function(done) {
        LiveJournal.RPC.getevents({
        	journal: 'engineering-ru',
		auth_method: 'noauth',
		selecttype: 'lastn',
		howmany: 50
	    }, function(err, value){

	    done(null, value);
	});
     });

    _.each(events.result.events, function(event){
	    console.log(event);
	    Posts.insert(event);
    });
}
 */
