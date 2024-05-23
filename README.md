<h1 align="center">
    Pool-Of-Tears Website
</h1>


<p align="center">
    Tech Stack
</p>
<p align="center">
    <img src="https://skillicons.dev/icons?i=html,css,react,vite,tailwind,bun"/>
</p>

This project uses React and Vite in Javascript. UI Components are from [@shadcn/ui](shadcnui-gh) with TailwindCSS.

## Developement
In this project, [bun][bun] is used as our JS Runtime & development toolkit. To get started, install bun:

```bash
# Linux & Mac:
curl -fsSL https://bun.sh/install | bash

# Windows:
powershell -c "irm bun.sh/install.ps1 | iex"
```

Make sure to have nodejs and other necessary dependencies ready.

### Initial setup

After successfully installing bun, run:
```bash
bun install
```

This should install the necessary npm packages for the project.

### Deploying development server

To run the development server, run:
```bash
bun run dev
```
You will be greeted with Vite's dev CLI toolkit. Use the following shortcuts to navigate within the CLI:

>  Shortcuts
>  - press r + enter to restart the server
>  - press u + enter to show server url
>  - press o + enter to open in browser
>  - press c + enter to clear console
>  - press q + enter to quit

### Building for Production
To build the production-ready website, run:

```bash
bun run build
```

After building, check for any issues by previewing the built bundle buy running:

```bash
bun run preview
```

### Vite Config

>[!Important]
>
>Add `visualizer()` to plugins for chunking visualization.  Smaller chunks >>> Bigger chunks!
>
>Output: `stats.html`. Open this via browser or any HTML viewer.

For more options, see the [Vite guide][vite-guide].


[bun]: https://bun.sh/
[shadcnui]: https://github.com/shadcn-ui/ui
[vite-guide]: https://vitejs.dev/guide/build
