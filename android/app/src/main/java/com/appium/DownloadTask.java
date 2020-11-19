package com.appium;

import android.app.Activity;
import android.content.Context;
import android.content.Intent;
import android.os.AsyncTask;
import android.widget.Toast;

import com.jakewharton.processphoenix.ProcessPhoenix;

import java.io.File;
import java.io.FileOutputStream;
import java.io.IOException;
import java.io.InputStream;
import java.io.OutputStream;
import java.net.HttpURLConnection;
import java.net.URL;

public class DownloadTask extends AsyncTask<String, Integer, String> {

    Context mContext;
    Activity mActivity;

    public DownloadTask(Context context, Activity activity) {
        mContext = context;
        mActivity = activity;
    }

    @Override
    protected void onPreExecute() {
        super.onPreExecute();
    }

    @Override
    protected String doInBackground(String... sUrl) {
        InputStream input = null;
        OutputStream output = null;
        HttpURLConnection connection = null;
        try {
            URL url = new URL(sUrl[0]);

            connection = (HttpURLConnection) url.openConnection();
            connection.setRequestMethod("GET");
            connection.setDoOutput(true);
            connection.connect();

            File pathDownload = new File(mContext.getFilesDir(), "index.android.bundle");

            input = connection.getInputStream();
            output = new FileOutputStream(pathDownload);

            int totalSize = connection.getContentLength();
            byte[] data = new byte[1024 * 256];
            long total = 0;
            int count;

            while ((count = input.read(data)) != -1) {
                // allow canceling with back button
                if (isCancelled()) {
                    input.close();
                    return null;
                }
                total += count;
                // publishing the progress....
                if (totalSize > 0) // only if total length is known
                    publishProgress((int) (total * 100 / totalSize));
                output.write(data, 0, count);
            }
        } catch (Exception e) {
            Toast.makeText(mContext, "Download failure!", Toast.LENGTH_LONG).show();
            return e.toString();
        } finally {
            try {
                if (output != null)
                    output.close();
                if (input != null)
                    input.close();
            } catch (IOException ignored) {
                Toast.makeText(mContext, "Download failure!", Toast.LENGTH_LONG).show();
            }

            if (connection != null)
                connection.disconnect();
        }
        return null;
    }

    @Override
    protected void onPostExecute(String result) {
        super.onPostExecute(result);
        Toast.makeText(mContext, "Download finish! Bundle has been stored! ", Toast.LENGTH_LONG).show();

        new android.os.Handler().postDelayed(
                new Runnable() {
                    @Override
                    public void run() {
                        Intent i = new Intent(mContext, MainActivity.class);
                        ProcessPhoenix.triggerRebirth(mContext, i);
                    }
                },
        2000);
    }
}
