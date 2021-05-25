module.exports = {
    dialect: 'postgres',
    dialectOptions: {
        ssl: {              //primeiro erro - ssl:true
          require: true,            //segundo erro
          rejectUnauthorized: false //corrigido com essas duas linhas
        }, 
      keepAlive: true,        
    },  
    host: process.env.HOST,
    username: process.env.USER,
    password:  process.env.PASS,
    database: process.env.DATABASE,
    //port: '5432',
    define: {
        timestamps: true,  //
        underscored: true //formato de snakecasse
    }
}