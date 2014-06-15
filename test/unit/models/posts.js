/**
 * Created by svkior on 15/06/14.
 */
(function () {
    "use strict";

    describe("Модель Posts", function () {

        it("Есть такая коллекция", function () {
            expect(Posts.find().fetch().length).toBe(50);
        });

    });

})();