import { useEffect, useState } from 'react';
import axios from 'axios';

/**
 * githubFetch is a hook that fetches the download URLs of the latest APKs from the GitHub repositories of Myne and GreenStash.
 *
 * @returns {Object} An object containing the URLs of the latest APKs from the GitHub repositories of Myne and GreenStash.
 * @returns {string} myneApkGithubUrl - The URL of the latest APK from the Myne GitHub repository.
 * @returns {string} greenStashApkGithubUrl - The URL of the latest APK from the GreenStash GitHub repository.
 *
 * This hook uses the axios library to send GET requests to the GitHub API, fetches the latest release from each repository,
 * finds the APK asset in the release, and returns its download URL.
 */
export function githubFetch() {
  const [myneApkGithubUrl, setMyneApkUrl] = useState('');
  const [greenStashApkGithubUrl, setGreenStashApkUrl] = useState('');

  useEffect(() => {
    const fetchApkUrl = (repo) => {
      return axios.get(`/github/repos/Pool-Of-Tears/${repo}/releases`, {
        headers: {
          Authorization: `${import.meta.env.VITE_GITHUB_TOKEN}`,
        },
      })
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

/**
 * fdroidFetch is a hook that fetches the download URLs of the latest APKs from the F-Droid repositories of Myne and GreenStash.
 *
 * @returns {Object} An object containing the URLs of the latest APKs from the F-Droid repositories of Myne and GreenStash.
 * @returns {string} myneApkFdroidUrl - The URL of the latest APK from the Myne F-Droid repository.
 * @returns {string} greenStashApkFdroidUrl - The URL of the latest APK from the GreenStash F-Droid repository.
 *
 * This hook uses the axios library to send GET requests to the F-Droid API, fetches the latest package for each app,
 * constructs the APK download URL using the package name and suggested version code, and returns the URL.
 */
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
