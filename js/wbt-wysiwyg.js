// JavaScript Document
var visl={
	nameSpace:'wbt-wysiwyg',
	onShiftEnter:  	{keepDefault:false, replaceWith:'<br>\n'},
	onCtrlEnter:  	{keepDefault:false, openWith:'\n<p>', closeWith:'</p>'},
	onTab:    		{keepDefault:false, replaceWith:'	'},
	previewTemplatePath: '~/wbt-blog.html',
	markupSet:  [
		{name:'Clean', replaceWith:function(markitup) { return markitup.selection.replace(/<(.*?)>/g, "") }, className:"clean" },
		{name:'Preview', className:'preview',  call:'preview', className:"view" },
		{separator:'|' },
		{name:'Bold', key:'B', openWith:'(!(<strong>|!|<b>)!)', closeWith:'(!(</strong>|!|</b>)!)', className:"strong" },
		{name:'Italic', key:'I', openWith:'(!(<em>|!|<i>)!)', closeWith:'(!(</em>|!|</i>)!)', className:"em"  },
		{name:'Stroke through', key:'S', openWith:'<del>', closeWith:'</del>', className:"stroke" },
		{separator:'|' },
		{name:'Heading 2', key:'2', openWith:'<h2(!( class="[![Class]!]")!)>', closeWith:'</h2>', placeHolder:'Your title here...', className:"heading2" },
        {name:'Paragraph', openWith:'<p(!( class="[![Class]!]")!)>', closeWith:'</p>', placeHolder:'Your text here...', className:"paragraf"  },
		{name:'Bulleted List', openWith:'    <ul>', closeWith:'</ul>', multiline:true, openBlockWith:'<ul>\n', closeBlockWith:'\n</ul>', className:"ul"},
		{name:'Numeric List', openWith:'    <ol>', closeWith:'</ol>', multiline:true, openBlockWith:'<ol>\n', closeBlockWith:'\n</ol>', className:"ol"},
		{name:'Li', key:'L', openWith:'<li>', closeWith:'</li>', className:"li" },
		{separator:'|' },
		{name:'Picture', key:'P', replaceWith:'<img src="[![Source:!:http://]!]" alt="[![Alternative text]!]" >', className:"pic" },
		{name:'Link', key:'K', openWith:'<a href="[![Link:!:http://]!]"(!( title="[![Title]!]")!)>', closeWith:'</a>', placeHolder:'Your text to link...', className:"link" },
		{separator:'|' },
		{name:'&uarr;', key:'N', openWith:'<sup>', closeWith:'</sup>', className:"super" },
		{name:'&darr;', key:'E', openWith:'<sub>', closeWith:'</sub>', className:"suber" },
		{separator:'|' },
		{name:'S', dropMenu:
			[
			  {name:'&deg;', replaceWith:'&deg;', className:"symbols"},
			  {name:'&mdash;', replaceWith:'&mdash;', className:"symbols"},
			  {name:'&hellip;', replaceWith:'&hellip;', className:"symbols"},
			  {name:'&copy;', replaceWith:'&copy;', className:"symbols"},
			  {name:'&frac12;', replaceWith:'&frac12;', className:"symbols"},
			  {name:'&frac14;', replaceWith:'&frac14;', className:"symbols"},
			  {name:'&frac34;', replaceWith:'&frac34;', className:"symbols"},
			  {name:'&reg;', replaceWith:'&reg;', className:"symbols"},
			  {name:'&para;', replaceWith:'&para;', className:"symbols"},
			  {separator:'|' },
			  {name:'&alpha;', replaceWith:'&alpha;', className:"symbols"},
			  {name:'&beta;', replaceWith:'&beta;', className:"symbols"},
			  {name:'&gamma;', replaceWith:'&gamma;', className:"symbols"},
			  {name:'&Delta;', replaceWith:'&Delta;', className:"symbols"}
			]
		}
	]
}