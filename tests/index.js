var test = require('tape');
var YTS = require('../');

test('search for movies', function (t) {
  t.plan(7);

  var yts = new YTS();
  yts.findMovie('Snatch', {with_rt_ratings: true}).then( function(movies) {
    t.equal(movies.status, 'ok', 'Request success');
    t.equal(movies.data.movies[0].title, 'Snatch', 'Title matches');
    t.equal(movies.data.movies[0].id, 2776, 'ID matches');
    t.ok(movies.data.movies[0].torrents.length, 'Has at least one torrent');
    t.ok(movies.data.movies[0].background_image, 'Has background image');
    t.ok(movies.data.movies[0].medium_cover_image, 'Has cover image');
    t.ok(movies.data.movies[0].rating, 'Has rating');
  });
});

test('get details for movie', function (t) {
  t.plan(6);

  var yts = new YTS();
  yts.getDetails(2776, {with_cast: true}).then( function(movie) {
    t.equal(movie.status, 'ok', 'Request success');
    t.equal(movie.data.movie.title, 'Snatch', 'Title matches');
    t.ok(movie.data.movie.torrents.length, 'Has at least one torrent');
    t.ok(movie.data.movie.description_intro, 'Has description');
    t.ok(movie.data.movie.rating, 'Has rating');
    t.ok(movie.data.movie.cast, 'Has actors');
  });
});

test('get suggestions for movie', function (t) {
  t.plan(2);

  var yts = new YTS();
  yts.getSuggestions(2776).then( function(movies) {
    t.equal(movies.status, 'ok', 'Request success');
    t.ok(movies.data.movies, 'Has suggestions');
  });
});

test('get comments for movie', function (t) {
  t.plan(3);

  var yts = new YTS();
  yts.getComments(2776).then( function(comments) {
    t.equal(comments.status, 'ok', 'Request success');
    t.ok(comments.data.comment_count, 'Has comment count');
    t.ok(comments.data.comments, 'Has comments');
  });
});

test('get movie reviews', function (t) {
  t.plan(3);

  var yts = new YTS();
  yts.getReviews(10).then( function(reviews) {
    t.equal(reviews.status, 'ok', 'Request success');
    t.ok(reviews.data.review_count, 'Has review count');
    t.ok(reviews.data.reviews, 'Has reviews');
  });
});

test('get parental guides for movie', function (t) {
  t.plan(3);

  var yts = new YTS();
  yts.getParentalGuides(10).then( function(guides) {
    t.equal(guides.status, 'ok', 'Request success');
    t.ok(guides.data.parental_guide_count, 'Has guides count');
    t.ok(guides.data.parental_guides, 'Has guides');
  });
});


test('get upcoming', function (t) {
  t.plan(3);

  var yts = new YTS();
  yts.getUpcoming().then( function(upcoming) {
    t.equal(upcoming.status, 'ok', 'Request success');
    t.ok(upcoming.data.upcoming_movies_count, 'Has upcoming count');
    t.ok(upcoming.data.upcoming_movies, 'Has upcoming movies');
  });
});

test('get user details', function (t) {
  t.plan(3);

  var yts = new YTS();
  yts.getUserDetails(23, {with_recently_downloaded: true}).then( function(user) {
    t.equal(user.status, 'ok', 'Request success');
    t.equal(user.data.username, 'Souseiseki', 'Username matches');
    t.ok(user.data.recently_downloaded, 'Has recently downloaded');
  });
});

/**
 * Without credentials the following tests just check for status messages
 */
test('get user key', function (t) {
  t.plan(1);

  var yts = new YTS();
  yts.getUserKey('username', 'password', 'application_key').then( function(key) {
    t.equal(key.status_message, 'Application key is invalid', 'Endpoint seems OK');
  });
});

test('get user profile', function (t) {
  t.plan(1);

  var yts = new YTS();
  yts.getUserProfile('user_key').then( function(profile) {
    t.equal(profile.status_message, 'User does not exist', 'Endpoint seems OK');
  });
});

test('edit user settings', function (t) {
  t.plan(1);

  var yts = new YTS();
  yts.editUserSettings('user_key', 'application_key', {about_text: 'foobar'}).then( function(settings) {
    t.equal(settings.status_message, 'Application key is invalid', 'Endpoint seems OK');
  });
});

test('register user', function (t) {
  t.plan(1);

  var yts = new YTS();
  yts.registerUser('application_key', 'username', 'password', 'email').then( function(settings) {
    t.equal(settings.status_message, 'Application key is invalid', 'Endpoint seems OK');
  });
});

test('forgot password', function (t) {
  t.plan(1);

  var yts = new YTS();
  yts.forgotPassword('application_key', 'email').then( function(settings) {
    t.equal(settings.status_message, 'Application key is invalid', 'Endpoint seems OK');
  });
});

test('reset password', function (t) {
  t.plan(1);

  var yts = new YTS();
  yts.resetPassword('reset_code','new_password', 'application_key').then( function(settings) {
    t.equal(settings.status_message, 'Application key is invalid', 'Endpoint seems OK');
  });
});

test('like movie', function (t) {
  t.plan(1);

  var yts = new YTS();
  yts.likeMovie('user_key','movie_id', 'application_key').then( function(settings) {
    t.equal(settings.status_message, 'Application key is invalid', 'Endpoint seems OK');
  });
});

test('get bookmarks', function (t) {
  t.plan(1);

  var yts = new YTS();
  yts.getBookmarks('user_key', {with_rt_ratings: true}).then( function(bookmarks) {
    t.equal(bookmarks.status_message, 'User does not exist', 'Endpoint seems OK');
  });
});

test('add bookmark', function (t) {
  t.plan(1);

  var yts = new YTS();
  yts.addBookmark('user_key', 'movie_id', 'application_key').then( function(bookmarks) {
    t.equal(bookmarks.status_message, 'Application key is invalid', 'Endpoint seems OK');
  });
});

test('delete bookmark', function (t) {
  t.plan(1);

  var yts = new YTS();
  yts.deleteBookmark('user_key', 'movie_id', 'application_key').then( function(bookmarks) {
    t.equal(bookmarks.status_message, 'Application key is invalid', 'Endpoint seems OK');
  });
});

test('make comment', function (t) {
  t.plan(1);

  var yts = new YTS();
  yts.makeComment('user_key', 'movie_id', 'comment_text', 'application_key').then( function(bookmarks) {
    t.equal(bookmarks.status_message, 'Application key is invalid', 'Endpoint seems OK');
  });
});

test('like comment', function (t) {
  t.plan(1);

  var yts = new YTS();
  yts.likeComment('user_key', 'comment_id', 'application_key').then( function(bookmarks) {
    t.equal(bookmarks.status_message, 'Application key is invalid', 'Endpoint seems OK');
  });
});

test('report comment', function (t) {
  t.plan(1);

  var yts = new YTS();
  yts.reportComment('user_key', 'comment_id', 'application_key').then( function(bookmarks) {
    t.equal(bookmarks.status_message, 'Application key is invalid', 'Endpoint seems OK');
  });
});

test('delete comment', function (t) {
  t.plan(1);

  var yts = new YTS();
  yts.deleteComment('user_key', 'comment_id', 'application_key').then( function(bookmarks) {
    t.equal(bookmarks.status_message, 'Application key is invalid', 'Endpoint seems OK');
  });
});

test('make request', function (t) {
  t.plan(1);

  var yts = new YTS();
  yts.makeRequest('user_key', 'movie_title', 'application_key', {request_message: 'foobar'}).then( function(bookmarks) {
    t.equal(bookmarks.status_message, 'Application key is invalid', 'Endpoint seems OK');
  });
});
