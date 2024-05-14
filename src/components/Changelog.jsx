import { useState } from 'react';
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
import { IconRocket } from '@tabler/icons-react';
import ChangelogFetcher from '../lib/changelog.jsx';
import { strings } from '../lib/strings.js';

const ChangelogViewer = ({ repo }) => {
  const [version, setVersion] = useState('');
  const s = strings.changelog;

  const handleVersionFetched = (fetchedVersion) => {
    setVersion(fetchedVersion);
  };
  return (
    <div >
      <Dialog>
        <DialogTrigger asChild>
          <Badge variant="secondary">
            <IconRocket size={16} className='mr-1'/>
            {s.title}
          </Badge>
        </DialogTrigger>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle>{s.title}</DialogTitle>
            <DialogDescription>{s.description} <strong>{version}</strong></DialogDescription>
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
