<? include 'config.php'; ?>
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
		
		<link rel="icon" href="favicon.ico" type="image/x-icon"/>
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

        <script>
            var _gaq=[['_setAccount','XXXXXX'],['_trackPageview']];
            (function(d,t){var g=d.createElement(t),s=d.getElementsByTagName(t)[0];
            g.src=('https:'==location.protocol?'//ssl':'//www')+'.google-analytics.com/ga.js';
            s.parentNode.insertBefore(g,s)}(document,'script'));
        </script>
    </body>
</html>
