const path = require("path");
const HTMLWebpackPlugin = require("html-webpack-plugin");
const colors = require("colors");

/* start jquery */
const webpack = require("webpack");
var $ = require("jquery");
/*  eend jquery */

const FaviconsWebpackPlugin = require("favicons-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const OptimizeCssAssetWebpackPlugin = require("optimize-css-assets-webpack-plugin");
const TerserWebpackPlugin = require("terser-webpack-plugin");
const { BundleAnalyzerPlugin } = require("webpack-bundle-analyzer");
const CssUrlRelativePlugin = require("css-url-relative-plugin");

/* images start */
const ImageminPlugin = require("imagemin-webpack-plugin").default;
const imageminMozjpeg = require("imagemin-mozjpeg");
const imageminSvgo = require("imagemin-svgo");
const { extendDefaultPlugins } = require("svgo");
// const ImageminWebpWebpackPlugin = require("imagemin-webp-webpack-plugin");

/* images finish */

const isDev = process.env.NODE_ENV === "development";
const isProd = !isDev;
isDev ? console.log("DEVELOPMENT is going....".magenta) : console.log("PRODUCTION is going....".magenta);

const create_page = process.env.NEW_PAGE === "create";

const optimization = () => {
  const config = {
    splitChunks: {
      chunks: "all",
    },
  };

  if (isProd) {
    config.minimizer = [new OptimizeCssAssetWebpackPlugin(), new TerserWebpackPlugin()];
  }

  return config;
};

const cssLoaders = (extra) => {
  const loaders = [
    {
      loader: MiniCssExtractPlugin.loader,
    },
    "css-loader",
    "postcss-loader",
  ];

  if (extra) {
    loaders.push(extra);
  }

  return loaders;
};

const plugins = () => {
  const base = [
    new HTMLWebpackPlugin({
      template: "./templates/index/#index.pug",
      filename: "index.html",
      chunks: ["__global", "index"],
    }),

    new HTMLWebpackPlugin({
      template: "./templates/index/#index_en.pug",
      filename: "index_en.html",
      chunks: ["__global", "index"],
    }),

    new HTMLWebpackPlugin({
      template: "./templates/events/#events.pug",
      filename: "events.html",
      chunks: ["__global", "events"],
    }),

    new HTMLWebpackPlugin({
      template: "./templates/events/#events_en.pug",
      filename: "events_en.html",
      chunks: ["__global", "events"],
    }),

    new HTMLWebpackPlugin({
      template: "./templates/aboutUs/#aboutUs.pug",
      filename: "aboutUs.html",
      chunks: ["__global", "aboutUs"],
    }),

    new HTMLWebpackPlugin({
      template: "./templates/aboutUs/#aboutUs_en.pug",
      filename: "aboutUs_en.html",
      chunks: ["__global", "aboutUs"],
    }),

    new HTMLWebpackPlugin({
      template: "./templates/eventPage/#eventPage.pug",
      filename: "eventPage.html",
      chunks: ["__global", "eventPage"],
    }),
    new HTMLWebpackPlugin({
      template: "./templates/eventPage/#eventPage_en.pug",
      filename: "eventPage_en.html",
      chunks: ["__global", "eventPage"],
    }),

    new HTMLWebpackPlugin({
      template: "./templates/eventPage_video/#eventPage_video.pug",
      filename: "eventPage_video.html",
      chunks: ["__global", "eventPage_video"],
    }),

    new HTMLWebpackPlugin({
      template: "./templates/eventPage_video/#eventPage_video_en.pug",
      filename: "eventPage_video_en.html",
      chunks: ["__global", "eventPage_video"],
    }),

    new HTMLWebpackPlugin({
      template: "./templates/gallery/#gallery.pug",
      filename: "gallery.html",
      chunks: ["__global", "gallery"],
    }),

    new HTMLWebpackPlugin({
      template: "./templates/gallery/#gallery_en.pug",
      filename: "gallery_en.html",
      chunks: ["__global", "gallery"],
    }),

    new HTMLWebpackPlugin({
      template: "./templates/contacts/#contacts.pug",
      filename: "contacts.html",
      chunks: ["__global", "contacts"],
    }),

    new HTMLWebpackPlugin({
      template: "./templates/contacts/#contacts_en.pug",
      filename: "contacts_en.html",
      chunks: ["__global", "contacts"],
    }),

    new HTMLWebpackPlugin({
      template: "./templates/menu/#menu.pug",
      filename: "menu.html",
      chunks: ["__global", "menu"],
    }),

    new HTMLWebpackPlugin({
      template: "./templates/menu/#menu_en.pug",
      filename: "menu_en.html",
      chunks: ["__global", "menu"],
    }),

    new webpack.ProvidePlugin({
      $: "jquery",
      jQuery: "jquery",
      "window.jQuery": "jquery'",
      "window.$": "jquery",
    }),

    new CleanWebpackPlugin(),
    /* копировать файлы без обработки */
    // new CopyWebpackPlugin({
    //   patterns: [
    //     {
    //       from: path.resolve(__dirname, "src/assets/videos"),
    //       to: path.resolve(__dirname, "dist/assets/videos"),
    //     },
    //   ],
    // }),

    new MiniCssExtractPlugin({
      filename: "./styles/[name].[contenthash].css",
    }),
    new CssUrlRelativePlugin(/* options */),
  ];

  if (isProd) {
    /* оптимизация картинок */
    base.push(
      new ImageminPlugin({
        pngquant: {
          quality: "75",
          optimizationLevel: 6,
        },

        plugins: [
          imageminMozjpeg({ quality: 75, progressive: true }),
          imageminSvgo({
            plugins: extendDefaultPlugins([{ name: "removeViewBox", active: false }]),
          }),
        ],
      }),
      new FaviconsWebpackPlugin({
        logo: path.resolve(__dirname, "./src/assets/favicon.png"),
        outputPath: path.resolve(__dirname, "./dist/assets/favicons/"),
        prefix: "./assets/favicons/",
      })

      // new ImageminWebpWebpackPlugin()
    );

    /* аналайзер */
    base.push(new BundleAnalyzerPlugin({ logLevel: "silent" }));
  }

  return base;
};

module.exports = {
  context: path.resolve(__dirname, "src"),

  mode: "development",
  entry: {
    __global: ["./js/__global/__global.js"],
    index: ["./js/index/#index.js"],
    events: ["./js/events/#events.js"],
    aboutUs: ["./js/aboutUs/#aboutUs.js"],
    eventPage: ["./js/eventPage/#eventPage.js"],
    eventPage_video: ["./js/eventPage/#eventPage.js"],
    menu: ["./js/menu/#menu.js"],
    gallery: ["./js/gallery/#gallery.js"],
    contacts: ["./js/contacts/#contacts.js"],
  },
  output: {
    filename: "./js/[contenthash].[name].js",
    path: path.resolve(__dirname, "dist"),
  },
  resolve: {
    /* список расширений при импорте */
    // extensions: [""],
    /* упрощение вложенности. В import ./ меняется на @ */
    alias: {
      "@js": path.resolve(__dirname, "src/js"),
      "@scss": path.resolve(__dirname, "src/scss"),
      "@": path.resolve(__dirname, "src/"),
      // bind version of jquery-ui
      // "jquery-ui": "jquery-ui/jquery-ui.js",
      // bind to modules;
      modules: path.join(__dirname, "node_modules"),
    },
  },
  optimization: optimization(),

  target: "web",
  devServer: {
    port: 3000,
    open: true,
    liveReload: true,
    // hot: isDev,
  },

  devtool: isDev ? "source-map" : false,

  module: {
    rules: [
      {
        test: /\.css$/,
        use: cssLoaders(),
      },

      {
        test: /\.scss$/,
        use: cssLoaders("sass-loader"),
      },

      {
        test: /\.(mov|mp4)$/,
        use: [
          {
            loader: "file-loader",
            options: {
              esModule: false,
              name: "[name]-[contenthash].[ext]",
              outputPath: "./assets/videos/",
            },
          },
        ],
      },

      {
        test: /\.(mp3)$/,
        use: [
          {
            loader: "file-loader",
            options: {
              esModule: false,
              name: "[name]-[contenthash].[ext]",
              outputPath: "./assets/audios/",
            },
          },
        ],
      },

      {
        test: /\.(jpe?g|png|gif|svg|webp)$/,
        use: [
          {
            loader: "file-loader",
            options: {
              esModule: false,
              name: "[name]-[contenthash].[ext]",
              outputPath: "./assets/images/",
            },
          },
        ],
      },

      {
        test: /\.pug$/,
        loader: "pug-loader",
      },

      /* work only with 0.5 html loader */
      {
        test: /\.html$/,
        loader: "html-loader",
        options: {
          attrs: ["img:src", "source:srcset"],
        },
      },

      {
        test: /\.(ttf|woff|woff2)$/,
        use: [
          {
            loader: "file-loader",
            options: {
              outputPath: "./assets/fonts/",
              name: "[name].[ext]",
            },
          },
        ],
      },

      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"],
          },
        },
      },
    ],
  },

  plugins: plugins(),
};

// if (create_page) {
//   const Page = require("./pages.js");

//   const testPage = new Page({
//     name: "dummy",
//     ext: ["js"],
//   });
// }
