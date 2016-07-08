JSON To CSV Plugin
==========

# Sobre o plugin

Plugin Javascript que converte um Json em um arquivo CSV

**Criado exclusivamente para converter um Json em um arquivo CSV :exclamation:**

# Instalação

    $ git clone https://github.com/MarcosEllys/jsonExportCSV

# Como usar

##### Para este JSON

```json
[
  {"_id": "577f016f4dcff5f215c2f0c0","index": 0,"isActive": false,"picture": "http://placehold.it/32x32","age": 36,"eyeColor": "brown","name": "Rocha Patrick","gender": "male","email": "rochapatrick@xelegyl.com"
  },
  {"_id": "577f016f47f51f94a31380b2","index": 1,"isActive": true,"picture": "http://placehold.it/32x32","age": 23,"eyeColor": "brown","name": "Raymond Gentry","gender": "male","email": "raymondgentry@xelegyl.com"
  },
  {"_id": "577f016f8eacf00e56b9b619","index": 2,"isActive": true,"picture": "http://placehold.it/32x32","age": 31,"eyeColor": "green","name": "Ruthie Roberson","gender": "female","email": "ruthieroberson@xelegyl.com"
  },
  {"_id": "577f016f380c3865bbdf5ed1","index": 3,"isActive": false,"picture": "http://placehold.it/32x32","age": 40,"eyeColor": "brown","name": "Brianna Ellison","gender": "female","email": "briannaellison@xelegyl.com"
  },
  {"_id": "577f016fcae606b434ee7338","index": 4,"isActive": false,"picture": "http://placehold.it/32x32","age": 31,"eyeColor": "green","name": "Trevino Le","gender": "male","email": "trevinole@xelegyl.com"
  },
  {"_id": "577f016f45a9c55a2597e598","index": 5,"isActive": true,"picture": "http://placehold.it/32x32","age": 40,"eyeColor": "green","name": "Becker Higgins","gender": "male","email": "beckerhiggins@xelegyl.com"
  },
  {"_id": "577f016fea90280cb0be07a6","index": 6,"isActive": false,"picture": "http://placehold.it/32x32","age": 26,"eyeColor": "blue","name": "Liza Joyner","gender": "female","email": "lizajoyner@xelegyl.com"
  }
]
```

##### Instancie ExportJson

```javascript
var exported = new ExportJson({
  data: jsonData,
  fileName: 'Vehicle Report',
  header: false,
  asc: false,
  headerPersonalized: {
		"Indice": "index",
		"Códgio ": "_id",
		"Nome": "name",
		"Imagem": "picture",
		"Idade": 36,
		"Cor do olho": "eyeColor",
		"Gênero": "gender",
		"E-mail": "email",
		"Ativo": "isActive"
	}
});
```


> :sunny: Por padrão o **header** é true e **não** é obrigatório

> :sunny: Por padrão o **asc** é false e **não** é obrigatório

> :sunny: Caso passe **headerPersonalized** a ordem vai ser a do **headerPersonalized**

##### Agora chame o metódo que exporta

```javascript
exported.export();
```

# Exmplo no JS Fiddle

[Link do exemplo](https://jsfiddle.net/marcosellys/ercemgeo/1/)

# Contribuição

  Esse plugin só foi possível graças a ajuda de [@brisanetesequias](https://github.com/brisanetesequias) e [@Wandecilenio](https://github.com/Wandecilenio)

# Licença

O plugin JSON To CSV possui código aberto e está sob a  [licença do MIT](http://opensource.org/licenses/MIT).
