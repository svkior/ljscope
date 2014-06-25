/**
 * Created by svkior on 16/06/14.
 */
Template.postSrvCollect.events({
    'submit form' : function(e){
        e.preventDefault();

        var post = {
            url: $(e.target).find('[name=url]').val()
        };
        Meteor.call('get_journal', post, function(error, id){
            if(error)
                return alert(error.reason);

            Router.go('postPage', {_id: id});
        });
    }
});
Template.postSrvCollect.helpers({
    currentClipboard: function(){
        return window.clipboardData.getData('Text');
    }
});
