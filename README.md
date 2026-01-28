# spaceport-web

Template for web projects

## Setup
Repo for hosting must be made public. Once you have repo created in GitHub, you need to go in and enable GitHub Pages deployment:
```
Settings -> Pages -> Source (change from) Deploy from a branch -> GitHub Actions
```

You will then probably want to set up your domain to point to the GitHub generated page, see [this](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site)

## Subpage
Since this is deploying as a subpage, it is configured a little differently. If

```
export default defineConfig({
    base: '/spaceport-web/',
    plugins: [react(), copy404Plugin()],
})
// should instead be (no base)
export default defineConfig({
    plugins: [react(), copy404Plugin()],
})
```
and
```
<BrowserRouter basename="/spaceport-web">
// should become 
<BrowserRouter>
```

spaceport-web is available under the MIT license. See the LICENSE file for more info.
