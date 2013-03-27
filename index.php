<? include 'config.php'; ?>
<?
    if (file_exists('data.xml')) {
        $xml = simplexml_load_file('data.xml');
    } else {
        die("Could not load data.");
    }
?>
<!DOCTYPE html>
<!--[if lt IE 7]>      <html class="no-js lt-ie9 lt-ie8 lt-ie7"> <![endif]-->
<!--[if IE 7]>         <html class="no-js lt-ie9 lt-ie8"> <![endif]-->
<!--[if IE 8]>         <html class="no-js lt-ie9"> <![endif]-->
<!--[if gt IE 8]><!--> <html class="no-js"> <!--<![endif]-->
    <head>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">

        <title><?= $meta['title']; ?></title>

        <meta name="author" content="<?= $meta['author']; ?>"/>
		<meta name="keywords" content="<?= $meta['keywords']; ?>"/>
		<meta name="title" content="<?= $meta['title']; ?>"/>
		<meta name="viewport" content="width = device-width, height = device-height, maximum-scale = 1.0, initial-scale = 1.0, user-scalable = no">
		<meta name="apple-touch-fullscreen" content="yes" />
		
		<meta name="application-name" content="<?= $meta['title']; ?>" />
		<meta name="msapplication-tooltip" content="<?= $meta['description']; ?>" />
		<meta name="msapplication-starturl" content="/" />
		<meta name="msapplication-TileImage" content="apple-touch-icon-114x114-precomposed.png">
		<meta name="msapplication-TileColor" content="#ffffff">
		
		<link rel="icon" href="favicon.png"/>
        <link rel="shortcut icon" href="favicon.png"/>
		<link rel="fluid-icon" href="apple-touch-icon-114x114-precomposed.png" title="<?= $meta['title']; ?>" />
		<link rel="apple-touch-icon-precomposed" sizes="57x57" href="apple-touch-icon-57x57-precomposed.png" />
		<link rel="apple-touch-icon-precomposed" sizes="114x114" href="apple-touch-icon-114x114-precomposed.png" />
		<link rel="apple-touch-icon-precomposed" sizes="72x72" href="apple-touch-icon-72x72-precomposed.png" />
		<link rel="apple-touch-icon-precomposed" sizes="144x144" href="apple-touch-icon-144x144-precomposed.png" />

		<meta name="twitter:card" content="summary">
		<meta name="twitter:site" content="<?= $meta['twitter']; ?>">
		<meta name="twitter:creator" content="<?= $meta['twitter']; ?>">
		<meta property="og:url" content="<?= $meta['url']; ?>"/>
		<meta property="og:title" content="<?= $meta['title']; ?>"/>
		<meta property="og:description" content="<?= $meta['description']; ?>"/>
		<meta property="og:image" content="apple-touch-icon-114x114-precomposed.png"/> 
		<meta property="og:type" content="website"/>

		<script data-main="js/main" src="js/components/require.js"></script>

        <link type="text/plain" rel="author" href="<?= $meta['url']; ?>/humans.txt" />
        <link rel="stylesheet" href="css/normalize.css">
        <link rel="stylesheet" href="css/main.css">
    </head>
    <body>

        <header>
            <nav>
                <ul>
                    <li><a class="home slide-to" href="#home">Home</a></li>
                    <li><a class="work slide-to" href="#work">Work</a></li>
                    <li><a class="connect slide-to" href="#connect">Connect</a></li>
                </ul>
            </nav>
        </header>

        <a name="home"></a>
        <div class="torso top table">
            <div class="cell">
                <h1>Hi, I'm <a rel="author" target="_blank" href="http://plus.google.com/116682852560364971555/about?rel=author">Daniel</a>.</h1>
                <h4>I'm an Interactive Strategist<br/>specializing in digital product development,<br/>
                    creative direction and marketing.</h4>
            </div>
        </div>

        <script type="text/javascript">var _a = _a || []; _a.push(['slider','run']);</script>
        <a name="work"></a>
        <div class="content">

            <? $n = 0; ?>
            <? foreach($xml->work as $work): ?>
            <? $images = glob($work->image_path . '*.jpg'); ?>
            <div class="work">
                <div class="inner clearfix">
                    <div data-event="click" data-action="slider/gotoNext" class="right arrow"></div>
                    <div class="frames">
                        <div class="home frame active" data-event="click" data-action="slider/goto">
                            <h2><?= $work->title; ?></h2>
                            <img class="home-image" src="<?= $work->image_path ?>1.jpg" />
                            <p><?= nl2br($work->description) ?></p>
                            <p class="tags"><?= $work->keywords ?></p>
                            <a class="visit" target="_blank" title="Launch Site" href="<?= $work->link ?>">Launch Site</a>
                        </div>
                        <div class="frame" data-event="click" data-action="slider/goto"><img src="<?= $work->image_path ?>2.jpg" /></div>
                        <? for($i=2;$i<count($images);$i++): ?>
                        <div class="frame" data-event="click" data-action="slider/goto"><img rel="<?= $images[$i]; ?>" /></div>
                        <? endfor; ?>
                    </div>
                </div>
            </div>
            <? $n++; ?>
            <? if ($n > 4) break; ?>
            <? endforeach; ?>


        </div>

        <a name="connect"></a>
        <div class="torso bottom table">
            <div class="cell">
                <div class="wrapper block-group by-3">
                    <div>
                        <h2>Biography</h2>
                        <p>
                            Hi, I'm Daniel. I'm a serial entrepreneur and interactive strategist, specializing in digital product development, creative direction, editorial direction, and marketing.
                        </p>
                        <p>
                            I've founded companies including Piccsy (an image discovery platform for creatives), EveryGuyed (a men's life/style blog network), and Moxy Creative (a boutique design agency).
                        </p>
                        <p>
                            I'm currently working on Rememberum, a tool that empowers people to remember their loved ones with beautiful, dynamic online memorials. Please contact me via e-mail with ideas, opportunities, or anything else you'd like to discuss.
                        </p>

                    </div>
                    <div>
                        <h2>Features</h2>
                        <ul>
                            <li><a target="_blank" title="Wall Street Journal" href="http://online.wsj.com/article/SB10000872396390443720204578004953091338258.html">Wall Street Journal</a></li>
                            <li><a target="_blank" title="Business Insider" href="http://www.businessinsider.com/pinterest-referral-traffic-chart-2012-2">Business Insider</a></li>
                            <li>Vanity Fair</li>
                            <li><a target="_blank" title="TechCrunch" href="http://techcrunch.com/2012/05/28/death-to-powerpoint-piccsy-rethinks-the-pitchdeck-gets-tons-of-pageviews/">TechCrunch</a></li>
                            <li><a target="_blank" title="GQ" href="http://www.gq.com/style/blogs/the-gq-eye/2010/10/check-out-dress-the-part-movie-prints.html">GQ</a></li>
                            <li><a target="_blank" title="Spike" href="http://www.spike.com/articles/0i2to7/hip-hop-stars-get-simpsonized">Spike</a></li>
                            <li><a target="_blank" title="MTV" href="http://newsroom.mtv.com/2009/09/10/kanye-west-lil-wayne-eminem-the-simpsons/">MTV</a></li>
                            <li><a target="_blank" title="MISC" href="http://www.danieleckler.com/misc-daniel-eckler.jpg">MISC</a></li>
                            <li>Computer Arts</li>
                            <li><a target="_blank" title="National Post" href="http://www.danieleckler.com/financial-post-daniel-eckler.jpg">National Post</a></li>
                            <li><a target="_blank" title="Toronto Star" href="http://www.starbusinessclub.ca/money/articles-money/monetizing-the-web-torontos-piccsy-and-making-money-off-free-images/">Toronto Star</a></li>
                        </ul>
                    </div>
                    <div>
                        <h2>Connect</h2>
                        <ul class="connect">
                            <li><a class="twitter" title="Twitter" href="">Twitter</a></li>
                            <li><a class="linkedin" title="Linked In" href="">Linked In</a></li>
                            <li><a class="facebook" title="Facebook" href="">Facebook</a></li>
                            <li><a class="piccsy" title="Piccsy" href="">Piccsy</a></li>
                            <li><a class="email" title="Email" href="">Email</a></li>
                            <li><a class="phone" title="Phone" href="">Phone</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>

        <footer>
            Copyright 2013 Groundwave Media Group. All Rights Reserved. | Design by <a target="_blank" href="http://www.moxycreative.com">Glenn Michael</a> for <a target="_blank" href="http://www.moxycreative.com">Moxy Creative House</a>
        </footer>

        <script>
            var _gaq=[['_setAccount','XXXXXX'],['_trackPageview']];
            (function(d,t){var g=d.createElement(t),s=d.getElementsByTagName(t)[0];
            g.src=('https:'==location.protocol?'//ssl':'//www')+'.google-analytics.com/ga.js';
            s.parentNode.insertBefore(g,s)}(document,'script'));
        </script>
    </body>
</html>
