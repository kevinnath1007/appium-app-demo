package com.appium;

import android.content.Context;
import android.util.Log;

import java.io.File;
import java.io.FileOutputStream;
import java.io.IOException;
import java.io.InputStream;
import java.io.OutputStream;
import java.net.HttpURLConnection;
import java.net.URL;

public class HotSwapUtil {

    public static String getJSBundleFile(Context context) {
        final DownloadFile downloadFile = new DownloadFile(context);
        downloadFile.execute("https://dl.dropboxusercontent.com/s/aqi4i84y9rub228/index.android.bundle");
        String file = "assets://index.android.bundle";
        File test = new File(context.getFilesDir(), "index.android.bundle");
        if (test.exists() == true) {
            Log.d("TEST", test.getAbsolutePath());
            return test.getAbsolutePath();
        }
        return file;
    }

}
