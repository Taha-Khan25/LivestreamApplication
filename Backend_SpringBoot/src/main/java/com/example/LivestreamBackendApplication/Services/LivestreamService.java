/*
package com.example.LivestreamBackendApplication.Services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import uk.co.caprica.vlcj.player.embedded.EmbeddedMediaPlayer;

@Service
public class LivestreamService {

    private EmbeddedMediaPlayer mediaPlayer;

    @Autowired
    public LivestreamService(EmbeddedMediaPlayerFactory mediaPlayerFactory) {
        this.mediaPlayer = mediaPlayerFactory.newEmbeddedMediaPlayer();
    }

    public void playLivestream(String rtspUrl) {
        mediaPlayer.media().play(rtspUrl);
    }

    public void pauseLivestream() {
        mediaPlayer.controls().pause();
    }

    public void adjustVolume(int volume) {
        mediaPlayer.audio().setVolume(volume);
    }
}
}
*/
