package com.appium;

import android.content.Context;
import android.widget.Toast;

import androidx.annotation.NonNull;

import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;

import java.io.File;

public class HotSwapModule extends ReactContextBaseJavaModule {
    private static ReactApplicationContext reactContext;

    public HotSwapModule(ReactApplicationContext context) {
        super(context);
        reactContext = context;
    }

    @NonNull
    @Override
    public String getName() {
        return "HotSwapBundle";
    }

    @ReactMethod
    public void downloadBundle() {
        Toast.makeText(getReactApplicationContext(), "Downloading...", Toast.LENGTH_SHORT).show();

        final DownloadTask downloadFile = new DownloadTask(getReactApplicationContext());
        downloadFile.execute("https://dl.dropboxusercontent.com/s/aqi4i84y9rub228/index.android.bundle");
    }
}