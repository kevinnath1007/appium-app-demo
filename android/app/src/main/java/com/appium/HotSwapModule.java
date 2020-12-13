package com.appium;

import android.content.Context;
import android.util.Log;
import android.widget.Toast;

import androidx.annotation.NonNull;

import com.facebook.react.ReactActivity;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;

import java.io.File;

public class HotSwapModule extends ReactContextBaseJavaModule {

    public HotSwapModule(ReactApplicationContext context) {
        super(context);
    }

    @NonNull
    @Override
    public String getName() {
        return "HotSwapBundle";
    }

    @ReactMethod
    public void downloadBundle(String url) {
        Toast.makeText(getReactApplicationContext(), "Downloading...", Toast.LENGTH_SHORT).show();

        final DownloadTask downloadFile = new DownloadTask(getReactApplicationContext(), getCurrentActivity());
        downloadFile.execute(url);
    }
}
