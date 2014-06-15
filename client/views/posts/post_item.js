Template.postItem.helpers({
    domain: function() {
    var a = document.createElement('a');
    a.href = this.url;
    return a.hostname;
    },
    processed_event: function() {
	var post = this.event;
	return post.replace(new RegExp("\\n",'g'),'<br/>');
    }
});
