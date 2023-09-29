/*
package com.example.LivestreamBackendApplication;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import uk.co.caprica.vlcj.factory.MediaPlayerFactory;


import javax.annotation.PostConstruct;

@Configuration
public class VlcjConfiguration {

    @Value("${vlcj.library.path}")
    private String vlcjLibraryPath;

    @PostConstruct
    public void init() {
        // Set the path to the VLC native libraries
        System.setProperty("jna.library.path", vlcjLibraryPath);
    }

    @Bean
    public MediaPlayerFactory mediaPlayerFactory() {
        return new DefaultMedia
    }
}
*/
