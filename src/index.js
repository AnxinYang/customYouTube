import cc from './ccjs/cc';

const WHITE = 'rgba(255,255,255, 0.7)';
const BLACK = 'rgba(0,0,0, 0.9)';
const BLACK_SOLID = 'rgb(25, 25, 25)';
const RED = '#d63031';
const CLIENT_ID = '845822050808-tjce2mn9ku0he2bql9vbn0567pbrbinu.apps.googleusercontent.com';
const SCOPES = 'https://www.googleapis.com/auth/youtube.readonly';
cc.setValue('viewport', {width: window.innerWidth, height: window.innerHeight});
window.addEventListener('resize', function () {
    cc.updateValue('viewport', {width: window.innerWidth, height: window.innerHeight});
});

let player = undefined;
window.startApp = function() {
    gapi.load('auth2', function(){
        // Retrieve the singleton for the GoogleAuth library and set up the client.
        cc.setValue('auth2', gapi.auth2.init({
            client_id: CLIENT_ID,
            scope: SCOPES,
        }));
        gapi.client.init({
            client_id: CLIENT_ID,
            scope: SCOPES,
        })
        gapi.client.load('youtube', 'v3');
        attachSignin(document.getElementById('OAuthButton'));
    });
};

function attachSignin(element) {
    cc.getValue('auth2').attachClickHandler(element, {},
        function(googleUser) {
            cc.setValue('user', googleUser);
        }, function(error) {
            alert(JSON.stringify(error, undefined, 2));
        });
}

function renderVideo(video) {
    let container = this.add('div')
        .css({
            textAlign: 'center',
            padding: '8px',
            width: '320px',
            cursor: 'pointer'
        })
        .on('click', function () {
            player = (player && player.loadVideoById(video.id.videoId)) || new YT.Player('player', {
                height: window.innerHeight - 51,
                width: '100%',
                videoId: video.id.videoId,
                events: {
                    'onReady': function (event) {
                        event.target.playVideo();
                    },
                    'onStateChange': function (e) {
                        
                    }
                }
            });
            document.getElementById('playerContainer').scrollIntoView();
        });

    container.add('img')
        .css({
            width: 'auto',
            height: '170px',
        })
        .attr({
            src: video.snippet.thumbnails.medium.url,
            align:"middle"
        });

    container
        .add('h4')
        .content(video.snippet.title)
        .css({
            color: 'white',
            overflow: 'hidden',
            textOverflow: 'ellipsis',
            whiteSpace: 'nowrap'
        })
}

function index() {
    let root = cc.select('#body');
    let app = cc.createElement('div', 'app')
        .css({
            width: '100vw',
            height: '100vh',
            background: 'rgb(18, 18, 18)',
            position: 'relative',
            overflow: 'auto'
        });
    root.appendChild(app);

    let loginButton = app.add('a', 'OAuthButton')
        .content('Sign In')
        .css({
            padding: '8px',
            position: 'absolute',
            color: 'darkred',
            top: 0,
            right: 0,
            cursor: 'pointer',
            transition: '0.2s',
        })
        .on('mouseenter', function () {
            this.css('color', 'red');
        })
        .on('mouseleave', function () {
            this.css('color', 'darkred');
        })
        .bind('user', function () {
            this.content('Sign out');
        });

    let searchBar = app.add('div')
        .css({
            position: 'fixed',
            top: 'calc(50vh - 35px)',
            padding: '8px 0',
            width: '100vw',
            background: 'rgb(18, 18, 18)',
            textAlign: 'center',
            zIndex: 9
        })
        .bind('searchResult', function (d) {
            this.css({
                top: d.length > 0 ? '0' : 'calc(50vh - 35px)'
            })
        })
        .add('input')
        .css({
            background: 'none',
            border: '1.5px solid rgb(64, 64, 64)',
            borderRadius: '4px',
            padding: '8px 8px',
            color: 'rgb(223, 223, 223)',
            width: '500px',
            transition: '0.2s'
        })
        .attr({
            placeholder: 'Search Video'
        })
        .on('keyup', function (e) {
            if (e.keyCode === 13) {
                var request = gapi.client.youtube.search.list({
                    q: e.target.value,
                    part: 'snippet',
                    maxResults: 50
                });

                request.execute(function (response) {
                    cc.setValue('searchResult', response.result.items);
                });
            }
        });
    app.add('div', 'playerContainer')
        .css({
            paddingTop: '51px'
        }).add('div', 'player')
    ;
    app.add('div', 'landing')
        .css({
            width: '100vw',
            padding: '32px',
            display: 'flex',
            flexWrap: 'wrap'
        })
        .bind('searchResult', function (d) {
            let self = this;
            self.removeAllChildren();
            (d || []).forEach(function (v) {
                renderVideo.call(self, v)
            })
        });


    app.add('div', 'watched')
        .css({
            height: '100vh'
        })
}
index();

