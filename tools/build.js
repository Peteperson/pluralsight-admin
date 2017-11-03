import webpack from 'webpack';
import webpackConfig from '../webpack.config.prod';
import colors from 'colors';

process.env.NODE_ENV = 'production';

console.log('Generating minified production bundle');

webpack(webpackConfig).run((err, stats) => {
    if(err){
        console.log(err.bold.red);
        return 1;
    }
    const jsonStats = stats.toJson();
    if(jsonStats.hasErrors){
        return jsonStats.errors.map(error => console.log(error.red));
    }
    console.log(`Webpack stats: ${stats}`);
    console.log('Application compiled in production mode and written to folder dist'.green);
    return 0;
});