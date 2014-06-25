Template.postItem.helpers({
    subject: function(){
        return this.lj.subject;
    },
    domain: function () {
        var a = document.createElement('a');
        a.href = this.lj.url;
        return a.hostname;
    },
    need2render_post: function () {
        return   Session.equals('readPost', this._id);
    },JJ
    rendered_post: function () {
        if (Session.equals('readPost', this._id)) {
            var post = this.lj.event;
            post = post.replace(new RegExp("\\n", 'g'), '<br/>');
            return post;
        } else {
            return "";
        }

    },
    post_tags: function () {
        return this.lj.props.taglist;
    },
    user_image: function () {
        return this.lj.poster_userpic_url;
    },
    nickname: function () {
        return this.lj.poster;
    },
    poster_ip: function () {
        return this.lj.props.poster_ip;
    },
    reposted: function () {
        return this.lj.props.repost !== undefined;
    },
    repost_url: function () {
        return this.lj.props.repost_url;
    },
    repost_author: function () {
        return this.lj.props.repost_author;
    }
});

Template.postItem.events({
    'click .read-more': function (e) {
        e.preventDefault();
        Session.set('readPost', this._id);
    },
    'click .close-post': function (e) {
        e.preventDefault();
        Session.set('readPost');
    }
});
