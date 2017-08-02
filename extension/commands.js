chrome.commands.onCommand.addListener(function(command){
    chrome.tabs.query({url: '*://www.youtube.com/*'}, function(tabs) {
        tabs.forEach(function(tab) {
            chrome.tabs.executeScript(tab.id, {file: 'jquery-3.2.1.min.js'}, function() {
                if (command == 'media_playpause') {
                    chrome.tabs.executeScript(tab.id, {file: 'youtube/playpause.js'});
                } else if (command == 'media_next') {
                    chrome.tabs.executeScript(tab.id, {file: 'youtube/next.js'});
                } else if (command == 'media_prev') {
                    chrome.tabs.executeScript(tab.id, {file: 'youtube/prev.js'});
                }
            });
        });
    });
});
