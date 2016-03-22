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
	{"Vehicle":"BMW","Date":"30, Jul 2013 09:24 AM","Location":"Hauz Khas, Enclave, New Delhi, Delhi, India","Speed":42},
	{"Vehicle":"Honda CBR","Date":"30, Jul 2013 12:00 AM","Location":"Military Road,  West Bengal 734013,  India","Speed":0},
	{"Vehicle":"Supra","Date":"30, Jul 2013 07:53 AM","Location":"Sec-45, St. Angel's School, Gurgaon, Haryana, India","Speed":58},
	{"Vehicle":"Land Cruiser","Date":"30, Jul 2013 09:35 AM","Location":"DLF Phase I, Marble Market, Gurgaon, Haryana, India","Speed":83},
	{"Vehicle":"Suzuki Swift","Date":"30, Jul 2013 12:02 AM","Location":"Behind Central Bank RO, Ram Krishna Rd by-lane, Siliguri, West Bengal, India","Speed":0},
	{"Vehicle":"Honda Civic","Date":"30, Jul 2013 12:00 AM","Location":"Behind Central Bank RO, Ram Krishna Rd by-lane, Siliguri, West Bengal, India","Speed":0},
	{"Vehicle":"Honda Accord","Date":"30, Jul 2013 11:05 AM","Location":"DLF Phase IV, Super Mart 1, Gurgaon, Haryana, India","Speed":71}
]
```

##### Instancie ExportJson

```javascript
var exported = new ExportJson({
  data: jsonData,
  fileName: 'Vehicle Report',
  header: false
});
```


> :sunny: Por padrão o **header** é true e **não** é obrigatório

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
