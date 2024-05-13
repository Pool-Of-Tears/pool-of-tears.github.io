import { useEffect, useState } from 'react';
import Markdown from 'react-markdown';
import axios from 'axios';
import remarkGfm from 'remark-gfm';
/**
 * ChangelogFetcher component fetches and displays the changelog of a specified repository.
 *
 * @param {Object} props - The properties passed to the component.
 * @param {string} props.repo - The name of the repository in the Pool-Of-Tears organization on GitHub for which the changelog is to be fetched.
 *
 * The `repo` prop should be a string that represents the name of a repository in the Pool-Of-Tears organization on GitHub.
 * For example, if you want to fetch the changelog for the repository at `https://github.com/Pool-Of-Tears/Myne`,
 * you would pass "Myne" as the `repo` prop:
 *
 * ```javascript
 * <ChangelogFetcher repo="Myne" />
 * ```
 *
 * The component will then fetch the latest release notes for the specified repository and display them using markdown formatting.
 */
function ChangelogFetcher({ repo, onVersionFetched }) {
  const [changelog, setChangelog] = useState('');

  const fetchChangelog = async (repo) => {
    const response = await axios.get(`https://api.github.com/repos/Pool-Of-Tears/${repo}/releases/latest`, {
      headers: {
        Authorization: `${import.meta.env.VITE_GITHUB_TOKEN}`,
      },
    });
    console.log('Response:', response);
    const changelog = response.data.body;
    const version = response.data.tag_name;
    return { changelog, version };
  };

  useEffect(() => {
    fetchChangelog(repo).then(({ changelog, version }) => {
      setChangelog(changelog);
      onVersionFetched(version);
    });
  }, [repo, onVersionFetched]);

  const components = {
    h2: ({ node, children, ...props }) => (
      <h2 className="pt-4 pb-1" {...props}>
        {children}
      </h2>
    ),
    p: ({ node, children, ...props }) => (
      <p className="pt-4 pb-4" {...props}>
        {children}
      </p>
    ),
    li: ({ node, children, ...props }) => (
      <li className="list-disc ml-5 text-base" {...props}>
        {children}
      </li>
    ),
    a: ({ node, children, ...props }) => {
      const href = props.href;
      const match = href.match(/\/(issues|pull|commit|compare)\/(.+)$/);

      if (!match) {
        return <a {...props}>{children}</a>;
      }

      const type = match[1];
      const value = match[2];

      switch (type) {
        case 'issues':
        case 'pull':
          return <a href={href}>#{value}</a>;
        case 'commit':
          return (
            <a href={href}>
              <code>{value.slice(0, 7)}</code>
            </a>
          );
        case 'compare':
          const tags = value.split('...');
          return (
            <a href={href}>
              {tags[0]}...{tags[1]}
            </a>
          );
        default:
          return <a {...props}>{children}</a>;
      }
    },
  };

  return (
    <div className="max-h-[60vh] overflow-auto">
      <Markdown components={components} remarkPlugins={remarkGfm}>
        {changelog}
      </Markdown>
    </div>
  );
}

export default ChangelogFetcher;
