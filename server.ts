import { ngExpressEngine } from '@nguniversal/express-engine';
import { provideModuleMap } from '@nguniversal/module-map-ngfactory-loader';

import { renderModuleFactory } from '@angular/platform-server';
import 'zone.js/dist/zone-node';
import 'reflect-metadata';

const { AppServerModuleNgFactory, LAZY_MODULE_MAP } = require('./dist-server/main');

import * as express from 'express';
import { readFileSync } from 'fs';
import { enableProdMode } from './node_modules/@angular/core';

enableProdMode();

const app = express();
const distPath = __dirname + '/dist';

app.engine('html', ngExpressEngine({
    bootstrap: AppServerModuleNgFactory,
    providers: [provideModuleMap(LAZY_MODULE_MAP)]
}));

app.set('view engine', 'html');
app.set('views', distPath);

app.get('*.*', express.static(distPath));

app.get('*', (req, res) => {
    res.render('index', {req});
});

app.listen(4500, () => {
    console.log('express running on port 4500');
});
