import { useEffect, useState } from 'react';
import axios from 'axios';

export function githubFetch() {
  const [myneApkGithubUrl, setMyneApkUrl] = useState('');
  const [greenStashApkGithubUrl, setGreenStashApkUrl] = useState('');

  useEffect(() => {
    const fetchApkUrl = (repo) => {
      return axios.get(`/github/repos/Pool-Of-Tears/${repo}/releases`)
        .then((response) => {
          const latestRelease = response.data[0];
          const apkAsset = latestRelease.assets.find((asset) => asset.name.endsWith('.apk'));
          return apkAsset.browser_download_url;
        });
    };

    Promise.all([fetchApkUrl('Myne'), fetchApkUrl('GreenStash')]).then(([myneUrl, greenStashUrl]) => {
      setMyneApkUrl(myneUrl);
      setGreenStashApkUrl(greenStashUrl);
    });
  }, []);

  return { myneApkGithubUrl, greenStashApkGithubUrl };
}

// function for fetching fdroid apks
export function fdroidFetch() {
  const [myneApkFdroidUrl, setMyneApkFdroidUrl] = useState('');
  const [greenStashApkFdroidUrl, setGreenStashApkFdroidUrl] = useState('');

  useEffect(() => {
    const fetchApkUrl = (packageName) => {
      return axios.get(`/fdroid/packages/${packageName}`).then((response) => {
        console.log('Response data:', response.data);
        const latestPackage = response.data;
        if (!latestPackage) {
          throw new Error(`No package found in response for ${packageName}`);
        }
        const apkVersion = latestPackage.suggestedVersionCode;
        const apkUrl = `https://f-droid.org/repo/${latestPackage.packageName}_${apkVersion}.apk`;
        console.log(apkUrl);
        return apkUrl;
      });
    };

    Promise.all([fetchApkUrl('com.starry.myne'), fetchApkUrl('com.starry.greenstash')]).then(
      ([myneUrl, greenStashUrl]) => {
        setMyneApkFdroidUrl(myneUrl);
        setGreenStashApkFdroidUrl(greenStashUrl);
      },
    );
  }, []);

  return { myneApkFdroidUrl, greenStashApkFdroidUrl };
}
