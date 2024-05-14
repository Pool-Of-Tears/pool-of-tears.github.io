import { useEffect, useState } from 'react';
import axios from 'axios';

  const currentTime = new Date().getTime();
  const oneHour = 60 * 60 * 1000; // in milliseconds

/**
 * Fetches the download URLs of the latest APKs from the GitHub repositories of Myne and GreenStash.
 *
 * @returns {Object} An object containing the URLs of the latest APKs from the GitHub repositories of Myne and GreenStash.
 * @property {string} myneApkGithubUrl - The URL of the latest APK from the Myne GitHub repository.
 * @property {string} greenStashApkGithubUrl - The URL of the latest APK from the GreenStash GitHub repository.
 *
 * @description
 * This function is a React hook that uses the axios library to send GET requests to the GitHub API.
 * It fetches the latest release from each repository, finds the APK asset in the release, and returns its download URL.
 * The function also caches the fetched APK URLs in the browser's local storage to improve performance.
 */
export function GithubFetch() {
  const [myneApkGithubUrl, setMyneApkUrl] = useState('');
  const [greenStashApkGithubUrl, setGreenStashApkUrl] = useState('');

  useEffect(() => {
    const fetchApkUrl = async (repo) => {
      const cachedUrl = localStorage.getItem(`apkUrl-${repo}`);
      const cachedTime = localStorage.getItem(`time-${repo}`);

     // If the APK URL is in the cache and it's not older than an hour, use it
      if (cachedUrl && cachedTime && currentTime - cachedTime < oneHour) {
        return cachedUrl;
      }

      const response = await axios.get(`/github/repos/Pool-Of-Tears/${repo}/releases`, {
        headers: {
          Authorization: `${import.meta.env.VITE_GITHUB_TOKEN}`,
        },
      });

      const latestRelease = response.data[0];
      const apkAsset = latestRelease.assets.find((asset) => asset.name.endsWith('.apk'));
      const apkUrl = apkAsset.browser_download_url;

      // Store the fetched APK URL in the cache
      localStorage.setItem(`apkUrl-${repo}`, apkUrl);
      localStorage.setItem(`time-${repo}`, currentTime.toString());

      return apkUrl;
    }

    Promise.all([fetchApkUrl('Myne'), fetchApkUrl('GreenStash')]).then(([myneUrl, greenStashUrl]) => {
      setMyneApkUrl(myneUrl);
      setGreenStashApkUrl(greenStashUrl);
    });
  }, []);

  return { myneApkGithubUrl, greenStashApkGithubUrl };
}

/**
 * FdroidFetch is a hook that fetches the download URLs of the latest APKs from the F-Droid repositories of Myne and GreenStash.
 *
 * @returns {Object} An object containing the URLs of the latest APKs from the F-Droid repositories of Myne and GreenStash.
 * @returns {string} myneApkFdroidUrl - The URL of the latest APK from the Myne F-Droid repository.
 * @returns {string} greenStashApkFdroidUrl - The URL of the latest APK from the GreenStash F-Droid repository.
 *
 * This hook uses the axios library to send GET requests to the F-Droid API, fetches the latest package for each app,
 * constructs the APK download URL using the package name and suggested version code, and returns the URL.
 */
export function FdroidFetch() {
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

/**
 * Fetches the download URLs of the latest APKs from the GitHub repositories of Myne and GreenStash.
 *
 * @returns {Object} An object containing the URLs of the latest APKs from the GitHub repositories of Myne and GreenStash.
 * @property {string} myneApkGithubUrl - The URL of the latest APK from the Myne GitHub repository.
 * @property {string} greenStashApkGithubUrl - The URL of the latest APK from the GreenStash GitHub repository.
 *
 * @description
 * This function is a React hook that uses the axios library to send GET requests to the GitHub API.
 * It fetches the latest release from each repository, finds the APK asset in the release, and returns its download URL.
 * The function also caches the fetched APK URLs in the browser's local storage to improve performance.
 */
export const fetchChangelog = async (repo) => {
  // Try to get the changelog from localStorage
  const cachedChangelog = localStorage.getItem(`changelog-${repo}`);
  const cachedVersion = localStorage.getItem(`version-${repo}`);
  const cachedTime = localStorage.getItem(`time-${repo}`);

  // If the changelog is in the cache and it's not older than an hour, use it
  if (cachedChangelog && cachedVersion && cachedTime && currentTime - cachedTime < oneHour) {
    return { changelog: cachedChangelog, version: cachedVersion };
  }

  const response = await axios.get(`/github/repos/Pool-Of-Tears/${repo}/releases/latest`, {
    headers: {
      // requires a GitHub personal access token with the `repo` scope. Use a `.env` file to store the token.
      Authorization: `${import.meta.env.VITE_GITHUB_TOKEN}`,
    },
  });
  // console.log('Response:', response);
  const changelog = response.data.body;
  const version = response.data.tag_name;

  // Store the fetched changelog in the cache
  localStorage.setItem(`changelog-${repo}`, changelog);
  localStorage.setItem(`version-${repo}`, version);
  localStorage.setItem(`time-${repo}`, currentTime.toString());

  return { changelog, version };
};
