module.exports = {
    dialect: 'postgres',
    dialectOptions: {
        ssl: {              //primeiro erro - ssl:true
          require: true,            //segundo erro
          rejectUnauthorized: false //corrigido com essas duas linhas
        }, 
      keepAlive: true,        
    },  
    host: 'ec2-34-200-94-86.compute-1.amazonaws.com',
    username: 'cpddrelfqacsvy',
    password: 'd2f158a9f89a9e8dc1d561378eba810466fd0caa580c0bbe72dabbed0d9dd658',
    database: 'de8buui8obn1n5',
    //port: '5432',
    define: {
        timestamps: true,  //
        underscored: true //formato de snakecasse
    }
}