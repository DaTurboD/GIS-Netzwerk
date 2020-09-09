// next.config.js
const withPlugins = require('next-compose-plugins');
const isProd = process.env.NODE_ENV === "production";
const withPWA = require('next-pwa')
const withOptimizedImages = require('next-optimized-images');
const withMDX = require('@zeit/next-mdx')({
  extension: /\.(md|mdx)$/,
});

module.exports = withPlugins([
  [withMDX, {
    /* config for withMDX */
    pageExtensions: ['js', 'mdx', 'md'],
  }],
  [withOptimizedImages, {
    /* config for next-optimized-images */
    handleImages: ['jpeg', 'png', 'svg', 'webp', 'gif', 'ico'],
    limit: 8192,
    optimize: true,
  }],
  [withPWA, {
    /* config for withPWA */
    pwa: {
      disable: !isProd,
      dest: "public"
    },
  }],
  /* Redirects 
  async redirects() {
    return [
      {
        source: '/gis/pyqgis-layer-bilder-exportieren/',
        destination: '/pyqgis-layer-bilder-exportieren',
        permanent: true
      },
      {
        source: '/gis/react-leaft-erste-schritte/',
        destination: '/erste-schritte-react-und-leaflet',
        permanent: true
      },
      {
        source: '/gis/extraktion-hohl-vollformen-raster-dgm/',
        destination: '/extraktion-von-hohl-und-vollformen-aus-einem-raster-dgm',
        permanent: true
      },
      {
        source: '/gis/was-ist-gis/',
        destination: '/was-ist-gis-geoinformationssystem',
        permanent: true
      },
      {
        source: '/gis/openlayers-web-map/',
        destination: '/openlayers-web-map',
        permanent: true
      },
      {
        source: '/gis/geoportal-deutschland/',
        destination: '/geoportal-deutschland-geoportale-bundeslaender',
        permanent: true
      },
      {
        source: '/gis/geodaten-konvertierung/',
        destination: '/geodaten-konvertierung',
        permanent: true
      },
      {
        source: '/gis/hochaufloesende-satellitenbilder-downloaden/',
        destination: '/hochaufloesende-satellitenbilder-downloaden',
        permanent: true
      },
      {
        source: '/gis/fernerkundung-bildklassifikation/',
        destination: '/fernerkundung-und-bildklassifikation',
        permanent: true
      },
      {
        source: '/gis/openstreetmap-daten-downloaden/',
        destination: '/openstreetmap-daten-shapefiles-downloaden',
        permanent: true
      },
      {
        source: '/gis/qgis-kostenlos-lernen/',
        destination: '/qgis-kostenlos-lernen',
        permanent: true
      },
      {
        source: '/gis/gis-software-kategorien/',
        destination: '/gis-software-kategorien',
        permanent: true
      },
      {
        source: '/gis/open-source-gis-anwendungen/',
        destination: '/open-source-web-gis-anwendungen',
        permanent: true
      },
      {
        source: '/gis/fme-lizenz-kostenlos/',
        destination: '/fme-lizenz-kostenlos-fuer-den-privaten-gebrauch',
        permanent: true
      },
      {
        source: '/gis/gis-podcasts/',
        destination: '/geo-gis-podcasts',
        permanent: true
      },
      {
        source: '/gis/srtm-download/',
        destination: '/einfacher-download-fuer-30-meter-srtm-tiles',
        permanent: true
      },
      {
        source: '/gis/was-ist-ein-shapefile-shp-dbf-shx/',
        destination: '/was-ist-ein-shapefile-shp-dbf-und-shx',
        permanent: true
      },
      {
        source: '/gis/geo-datenbank-optionen/',
        destination: '/gis-geo-datenbank-managementsystem-optionen',
        permanent: true
      },
      {
        source: '/gis/utm-transformationstool/',
        destination: '/gk-utm-koordinaten-umrechnen-transformationstool',
        permanent: true
      },
      {
        source: '/gis/gis-und-ar/',
        destination: '/gis-augmented-reality-ar',
        permanent: true
      },
      {
        source: '/gis/gis-freiwilligenarbeit/',
        destination: '/gis-freiwilligenarbeit',
        permanent: true
      },
      {
        source: '/gis/gehalt-in-der-gis-branche/',
        destination: '/gehalt-und-jobs-in-der-gis-branche',
        permanent: true
      },
      {
        source: '/gis/gis-influencer/',
        destination: '/die-bekanntesten-geospatial-und-gis-influencers',
        permanent: true
      },
      {
        source: '/gis/postgis-qgis/',
        destination: '/postgre-sql-mit-post-gis-installieren-und-in-qgis-einrichten',
        permanent: true
      },
      {
        source: '/gis/web-feature-service/',
        destination: '/web-feature-service-open-source-wfs',
        permanent: true
      },
      {
        source: '/gis/wms-wmts/',
        destination: '/wms-web-map-service-wmts',
        permanent: true
      },
      {
        source: '/gis/gis-blogs/',
        destination: '/geographie-gis-blogs',
        permanent: true
      },
      {
        source: '/gis/welche-gis-anwendungen-gibt-es/',
        destination: '/gis-anwendungen-welche-gis-anwendungen-gibt-es',
        permanent: true
      },
      {
        source: '/gis/gis-jobboersen/',
        destination: '/gis-jobboersen-auf-der-suche-nach-einem-neuen-gis-job',
        permanent: true
      },
      {
        source: '/gis/unterschied-cad-gis/',
        destination: '/gis-vs-cad-unterschied-zwischen-gis-cad',
        permanent: true
      },
      {
        source: '/gis/autocad-shapefile-export/',
        destination: '/auto-cad-map-3d-shapefile-export',
        permanent: true
      },
      {
        source: '/gis/gis-dienstleister/',
        destination: '/gis-firmen-gis-dienstleister-verzeichnis',
        permanent: true
      },
      {
        source: '/gis/unigis-professional-weiterbildung/',
        destination: '/unigis-weiterbildung-geoinformatik',
        permanent: true
      },
      {
        source: '/gis/geodaten-deutschland-download/',
        destination: '/geodaten-deutschland-online-download-kostenlos',
        permanent: true
      },
      {
        source: '/gis/gis-software-optionen/',
        destination: '/gis-software-optionen-open-source-kostenlos-kostenpflichtig',
        permanent: true
      },
      {
        source: '/gis/geodatenmanager-weiterbildung/',
        destination: '/geodatenmanager-weiterbildung-universitaet-tuebingen',
        permanent: true
      },
      {
        source: '/gis/was-sind-geodaten/',
        destination: '/geodaten-was-sind-geodaten',
        permanent: true
      },
      {
        source: '/web-development/mailchimp-newsletter-sign-up-form-gatsbyjs/',
        destination: '/mailchimp-newsletter-gatsby-js',
        permanent: true
      },
      {
        source: '/web-development/gatsby-aws-codebuild-codepipeline/',
        destination: '/gatsbyjs-codebuild-ci-cd-pipeline',
        permanent: true
      },
      {
        source: '/web-development/gatsby-js-google-adsense/',
        destination: '/google-adsense-auf-einer-gatsby-js-seite-integrieren',
        permanent: true
      },
      {
        source: '/web-development/statische-website-aws-cloudfront/',
        destination: '/statische-webseite-mit-eigener-domain-aws-s3-und-cloud-front-hosten',
        permanent: true
      },
      {
        source: '/web-development/gatsby-buddy/',
        destination: '/gatsby-cli-automatisierung-mit-git-hub-und-buddy',
        permanent: true
      },
      {
        source: '/web-development/bildbearbeitung-mit-python-zuschneiden/',
        destination: '/skalieren-und-zuschneiden-von-bildern-mit-python',
        permanent: true
      },
      {
        source: '/web-development/gatsby-analytics-reporting-api-seitenaufrufe/',
        destination: '/seitenaufrufe-mit-gatsby-und-google-analytics-reporting-api-anzeigen',
        permanent: true
      },
      {
        source: '/web-development/migration-wordpress-gatsby/',
        destination: '/migration-wordpress-gatsby',
        permanent: true
      },
      {
        source: '/en/web-development/gatsby-google-ad-manager-adsense/',
        destination: '/integrate-google-ad-manager-with-adsense-in-your-gatsby-site',
        permanent: true
      },
      {
        source: '/en/web-development/build-deploy-gatsby-google-cloud-build-firebase/',
        destination: '/build-and-deploy-your-gatsby-site-with-google-cloud-build-to-firebase',
        permanent: true
      },
    ]
  }, */
  
  // your config for other plugins or the general next.js here...
]);