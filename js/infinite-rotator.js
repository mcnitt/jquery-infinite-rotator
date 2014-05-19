// Copyright (c) 2010 TrendMedia Technologies, Inc., Brian McNitt. 
// All rights reserved.
//
// Released under the GPL license
// http://www.opensource.org/licenses/gpl-license.php
//
// **********************************************************************
// This program is distributed in the hope that it will be useful, but
// WITHOUT ANY WARRANTY; without even the implied warranty of
// MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. 
// **********************************************************************

$(window).load(function() { //start after HTML, images have loaded

    var InfiniteRotator = {
        init: function() {
            //initial fade-in time (in milliseconds)
            var initialFadeIn = 1000;

            //interval between items (in milliseconds)
            var itemInterval = 5000;

            //cross-fade time (in milliseconds)
            var fadeTime = 2500;

            //count number of items
            var numberOfItems = $('.rotating-item').length;

            //set current item
            var currentItem = 0;

            //show first item
            $('.rotating-item').eq(currentItem).fadeIn(initialFadeIn);

            //loop through the items		
            var infiniteLoop = setInterval(function() {
                $('.rotating-item').eq(currentItem).fadeOut(fadeTime);

                if (currentItem == numberOfItems - 1) {
                    currentItem = 0;
                } else {
                    currentItem++;
                }
                $('.rotating-item').eq(currentItem).fadeIn(fadeTime);

            }, itemInterval);
        }
    };

    InfiniteRotator.init();

});