/*global require, module */
'use strict';
const Markdown = require('markdown-it'),
	annotateExample = require('../util/md-annotate-example'),
	annotateImage = require('../util/md-annotate-image'),
	githubPreamble = require('../util/markdown-it-github-preamble'),
	md = new Markdown().use(annotateExample).use(annotateImage).use(githubPreamble, {
		className: 'preamble',
		tableAttributeName: 'data-role',
		tableAttributeValue: 'markdown-preamble'
	});

module.exports = function mdToHtml(text) {
	return md.render(text);
};



