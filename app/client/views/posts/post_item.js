Template.postItem.helpers({
    domain: function () {
        var a = document.createElement('a');
        a.href = this.url;
        return a.hostname;
    },
    need2render_post: function () {
        return   Session.equals('readPost', this._id);
    },
    rendered_post: function () {
        if (Session.equals('readPost', this._id)) {
            var post = this.event;
            post = post.replace(new RegExp("\\n", 'g'), '<br/>');
            return post;
        } else {
            return "";
        }

    },
    post_tags: function () {
        return this.props.taglist;
    },
    user_image: function () {
        return this.poster_userpic_url;
    },
    nickname: function () {
        return this.poster;
    },
    poster_ip: function () {
        return this.props.poster_ip;
    },
    reposted: function () {
        return this.props.repost !== undefined;
    },
    repost_url: function () {
        return this.props.repost_url;
    },
    repost_author: function () {
        return this.props.repost_author;
    }
});

Template.postItem.events({
    'click .read-more': function (e) {
        e.preventDefault()
        Session.set('readPost', this._id);
    },
    'click .close-post': function (e) {
        e.preventDefault()
        Session.set('readPost');
    }
});
