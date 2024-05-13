import { useState, useEffect } from 'react';
import ChangelogFetcher from '../lib/changelog.jsx';
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
import { strings } from '../lib/strings.js';

const ChangelogViewer = ({ repo }) => {
  const [version, setVersion] = useState('');
  const s = strings.changelog;

  const handleVersionFetched = (fetchedVersion) => {
    setVersion(fetchedVersion);
  };
  return (
    <div className="bg-primary bg-opacity-50 p-5 rounded-lg">
      <Dialog>
        <DialogTrigger asChild>
          <Badge variant="secondary">{s.title}</Badge>
        </DialogTrigger>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle>{s.title}</DialogTitle>
            <DialogDescription>{s.description}{version}</DialogDescription>
          </DialogHeader>
          <div className="flex-col px-2">
            <ChangelogFetcher repo={repo} onVersionFetched={handleVersionFetched}/>
          </div>
          <DialogFooter className="sm:justify-end">
          <DialogClose asChild>
            <Button type="button" variant="outline">
              Close
            </Button>
          </DialogClose>
        </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default ChangelogViewer;
