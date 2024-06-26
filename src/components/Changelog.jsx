import { useState, lazy, Suspense } from 'react';
import { Badge } from './ui/badge.jsx';
import { Button } from './ui/button.jsx';
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from './ui/dialog.jsx';
import { SkeletonShortText, SkeletonCard } from './Loader.jsx';
import { IconRocket } from '@tabler/icons-react';
import { strings } from '../lib/strings.js';

// Lazy load the Changelog component with delay of 2 seconds
const ChangelogFetcher = lazy(() => {
  return new Promise(resolve => {
    setTimeout(() => resolve(import('../lib/changelog.jsx')), 2000);
  });
});

const ChangelogViewer = ({ repo }) => {
  const [version, setVersion] = useState('');
  const s = strings.changelog;

  const handleVersionFetched = (fetchedVersion) => {
    setVersion(fetchedVersion);
  };
  return (
    <div className="flex justify-center items-center p-2">
      <Dialog>
        <DialogTrigger asChild>
          <Badge variant="secondary" className="h-[2rem] shadow-md">
            <IconRocket size={16} className="mr-1" />
            {s.title}
          </Badge>
        </DialogTrigger>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle>{s.title}</DialogTitle>
            <DialogDescription className="m-0">
              <span>
                {s.description}
                &nbsp;
                {version ? <strong>{version}</strong> : <SkeletonShortText />}
              </span>
            </DialogDescription>
          </DialogHeader>
          <div className="flex-col px-2">
            <Suspense fallback={<SkeletonCard />}>
              <ChangelogFetcher repo={repo} onVersionFetched={handleVersionFetched} />
            </Suspense>
          </div>
          <DialogFooter className="sm:justify-end">
            <DialogClose asChild>
              <Button type="button" variant="outline">
                {s.close}
              </Button>
            </DialogClose>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default ChangelogViewer;
