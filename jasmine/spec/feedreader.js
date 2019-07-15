/* feedreader.js
 *
 * This is the spec file that Jasmine will read and contains
 * all of the tests that will be run against your application.
 */

/* We're placing all of our tests within the $() function,
 * since some of these tests may require DOM elements. We want
 * to ensure they don't run until the DOM is ready.
 */
$(function () {

  describe('RSS Feeds', function () {

    it('are defined', () => {
      expect(allFeeds).toBeDefined();
      expect(allFeeds.length).not.toBe(0);
    });

    it('has all urls defined', () => {
      for (const feed of allFeeds) {
        expect(feed.url).toBeDefined();
        expect(feed.url.length).not.toBe(0);
      }
    });

    it('has all names defined', () => {
      for (const feed of allFeeds) {
        expect(feed.name).toBeDefined();
        expect(feed.name.length).not.toBe(0);
      }
    });

  });

  describe('The Menu', function () {

    it('has the menu element hidden by default', () => {
      expect($('body').hasClass('menu-hidden')).toEqual(true);
    });

    it('toggle the menu element when after clicking on it', () => {

      $('.menu-icon-link').trigger('click');
      expect($('body').hasClass('menu-hidden')).toBe(false);

      $('.menu-icon-link').trigger('click');
      expect($('body').hasClass('menu-hidden')).toBe(true);
    });

  });

  describe('Initial Entries', function () {

    beforeEach(done => {
      loadFeed(0, () => {
        done();
      });
    });

    it('has at least one entry element within the feed element', () => {
        expect($('.feed .entry').length).toBeGreaterThan(0);
    });
  });

  describe('New Feed Selection', () => {

    let oldFeed, newFeed;

    beforeEach(done => {
      loadFeed(1, () => {

        oldFeed = $('.feed').html();
        loadFeed(2, () => {
          done();
        });

      });
    });

    afterEach(() => {
      loadFeed(0);
    });

    it('load the content differently each time it loaded', () => {
      newFeed = $('.feed').html();
      expect(oldFeed).not.toEqual(newFeed);
    });

  });
}());
