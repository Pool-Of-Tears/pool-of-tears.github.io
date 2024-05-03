import { useEffect, useState } from 'react';

export function githubFetch() {
  const [myneApkGithubUrl, setMyneApkUrl] = useState('');
  const [greenStashApkGithubUrl, setGreenStashApkUrl] = useState('');

  useEffect(() => {
    const fetchApkUrl = (repo) => {
      return fetch(`https://api.github.com/repos/Pool-Of-Tears/${repo}/releases`)
        .then((response) => response.json())
        .then((data) => {
          const latestRelease = data[0];
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

//for future use, when CORS handling enabled
export function fdroidFetch() {
  const [myneApkFdroidUrl, setMyneApkFdroidUrl] = useState('');
  const [greenStashApkFdroidUrl, setGreenStashApkFdroidUrl] = useState('');

  useEffect(() => {
    const fetchApkUrl = (packageName) => {
      return fetch(`https://f-droid.org/api/v1/packages/${packageName}`)
        .then((response) => response.json())
        .then((data) => {
          const latestPackage = data.package;
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
