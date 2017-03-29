# Getting Started
A Project on AnjularJs V2.0.This has the following pages/functionality

Multiple Product Pages

Contact Page with Dynamic Form

About Us Page

Slider on Home Page

Tabs on Home page

Meta Data Integration (SEO tags)

Super simple Angular 2 app with 1 module and 2 routes 

## Get the Code
```
git clone https://github.com/johnpapa/angular2-tour-of-heroes.git toh
cd toh
npm i
```

### Just in Time (JiT) Compilation

Runs the TypeScript compiler and launches the app

```
npm start
```

### Ahead of Time (AoT) Compilation 

Runs the Angular AoT compiler, rollup, uglify for an optimized bundle, then launches the app

```
npm run start-aot
```

### AoT + gzip 

Runs AoT plus gzips and launches the app 

```
gulp copy-aot-gzip
npm run aot
npm run rollup
http-server
```

Notes:
- Use your favorite server in place of `http-server`
- This could be scripted, obviously
- `lite-server` does not launch gzipped files by default.


