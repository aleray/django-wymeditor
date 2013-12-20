/**
 * WYMeditor : what you see is What You Mean web-based editor
 * Copyright (c) 2005 - 2009 Jean-Francois Hovinne, http://www.wymeditor.org/
 * Dual licensed under the MIT (MIT-license.txt)
 * and GPL (GPL-license.txt) licenses.
 *
 * For further information visit:
 *        http://www.wymeditor.org/
 *
 * File Name:
 *        jquery.wymeditor.embed.js
 *        Experimental embed plugin
 *
 * File Authors:
 *        Jonatan Lundin (jonatan.lundin a-t gmail dotcom)
 *        Roger Hu (roger.hu a-t gmail dotcom)
 *        Scott Nixon (citadelgrad a-t gmail dotcom)
 */

(function () {
    if (WYMeditor) {

        //WYMeditor.XhtmlValidator._tags.foo = {
            //"attributes":[
                ////"allowscriptaccess",
                ////"allowfullscreen",
                ////"height",
                ////"src",
                ////"type",
                ////"width"
            //]
        //};

        // Override the XhtmlSaxListener to allow param, embed and iframe.
        //
        // We have to do an explicit override
        // of the function instead of just changing the startup parameters
        // because those are only used on creation, and changing them after
        // the fact won't affect the existing XhtmlSaxListener
        var XhtmlSaxListener = WYMeditor.XhtmlSaxListener;
        WYMeditor.XhtmlSaxListener = function () {
            var listener = XhtmlSaxListener.call(this);
            listener.block_tags.push('figure');
            listener.block_tags.push('figcaption');

            return listener;
        };

        WYMeditor.XhtmlSaxListener.prototype = XhtmlSaxListener.prototype;
        console.log(WYMeditor.XhtmlSaxListener)
    }
})();
