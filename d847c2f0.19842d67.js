(window.webpackJsonp=window.webpackJsonp||[]).push([[43],{101:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return l})),t.d(n,"metadata",(function(){return i})),t.d(n,"rightToc",(function(){return b})),t.d(n,"default",(function(){return c}));var a=t(2),p=t(6),r=(t(0),t(119)),l={id:"prop",title:"Prop"},i={unversionedId:"api/decorators/prop",id:"api/decorators/prop",isDocsHomePage:!1,title:"Prop",description:"@prop(options WhatIsIt) is used for setting properties in a Class (without this set, it is just a type and will NOT be in the final model/document)",source:"@site/../docs/api/decorators/prop.md",slug:"/api/decorators/prop",permalink:"/typegoose/docs/api/decorators/prop",editUrl:"https://github.com/typegoose/typegoose/edit/master/docs/../docs/api/decorators/prop.md",version:"current",sidebar:"docs",previous:{title:"Environment Variables",permalink:"/typegoose/docs/api/environment-variables"},next:{title:"Map Prop",permalink:"/typegoose/docs/api/decorators/map-prop"}},b=[{value:"Options",id:"options",children:[{value:"required",id:"required",children:[]},{value:"index",id:"index",children:[]},{value:"unique",id:"unique",children:[]},{value:"default",id:"default",children:[]},{value:"_id",id:"_id",children:[]},{value:"ref",id:"ref",children:[]},{value:"refPath",id:"refpath",children:[]},{value:"refType",id:"reftype",children:[]},{value:"validate",id:"validate",children:[]},{value:"alias",id:"alias",children:[]},{value:"select",id:"select",children:[]},{value:"get &amp; set",id:"get--set",children:[]},{value:"type",id:"type",children:[]},{value:"enum",id:"enum",children:[]},{value:"addNullToEnum",id:"addnulltoenum",children:[]},{value:"discriminators",id:"discriminators",children:[]},{value:"innerOptions",id:"inneroptions",children:[]},{value:"outerOptions",id:"outeroptions",children:[]},{value:"Array Options",id:"array-options",children:[]},{value:"Map Options",id:"map-options",children:[]},{value:"String Transform options",id:"string-transform-options",children:[]},{value:"String Validation options",id:"string-validation-options",children:[]},{value:"Number Validation options",id:"number-validation-options",children:[]}]}],o={rightToc:b};function c(e){var n=e.components,t=Object(p.a)(e,["components"]);return Object(r.b)("wrapper",Object(a.a)({},o,t,{components:n,mdxType:"MDXLayout"}),Object(r.b)("p",null,Object(r.b)("inlineCode",{parentName:"p"},"@prop(options: object, kind: WhatIsIt)")," is used for setting properties in a Class (without this set, it is just a type and will ",Object(r.b)("strong",{parentName:"p"},"NOT")," be in the final model/document)"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"options")," is to set ",Object(r.b)("a",Object(a.a)({parentName:"li"},{href:"#options"}),"all options")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"kind")," is to overwrite what kind of prop this is (None = Normal, Array = for arrays, Map = for Maps) (should be auto-inferred)")),Object(r.b)("h2",{id:"options"},"Options"),Object(r.b)("h3",{id:"required"},"required"),Object(r.b)("p",null,"Accepts Type: ",Object(r.b)("inlineCode",{parentName:"p"},"boolean")),Object(r.b)("p",null,"Set this to true, if the property is required (best practice is ",Object(r.b)("inlineCode",{parentName:"p"},"public property!: any"),", note the ",Object(r.b)("inlineCode",{parentName:"p"},"!"),")",Object(r.b)("br",{parentName:"p"}),"\n","For more information see the ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"http://mongoosejs.com/docs/api.html#schematype_SchemaType-required"}),"mongoose documentation")),Object(r.b)("p",null,"Example:"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-ts"}),'class Something {\n  @prop({ required: true }) // this is now required in the schema\n  public firstName!: string;\n\n  @prop() // by default, a property is not required\n  public lastName?: string; // using the "?" marks the property as optional\n}\n')),Object(r.b)("h3",{id:"index"},"index"),Object(r.b)("p",null,"Accepts Type: ",Object(r.b)("inlineCode",{parentName:"p"},"boolean")),Object(r.b)("p",null,"Create an Index for this Property. Should act like the ",Object(r.b)("inlineCode",{parentName:"p"},"@index")," class decorator, but without options."),Object(r.b)("p",null,"Example:"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-ts"}),"class IndexedClass {\n  @prop({ index: true })\n  public indexedField?: string;\n}\n")),Object(r.b)("h3",{id:"unique"},"unique"),Object(r.b)("p",null,"Accepts Type: ",Object(r.b)("inlineCode",{parentName:"p"},"boolean")),Object(r.b)("p",null,"Create an Index that sets this property to be ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"http://mongoosejs.com/docs/api.html#schematype_SchemaType-unique"}),"unique"),"."),Object(r.b)("p",null,"Example:"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-ts"}),'class IndexedClass {\n  @prop({ unique: true }) // implicitly has "index: true"\n  public uniqueId?: string;\n}\n')),Object(r.b)("h3",{id:"default"},"default"),Object(r.b)("p",null,"Accepts Type: ",Object(r.b)("inlineCode",{parentName:"p"},"any")),Object(r.b)("p",null,"Set a default, when no value is given at creation time."),Object(r.b)("p",null,"Example:"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-ts"}),"class Defaulted {\n  @prop({ default: 'hello world' })\n  public upperCase?: string; // mark as optional, because it will be defaulted\n}\n")),Object(r.b)("h3",{id:"_id"},"_id"),Object(r.b)("p",null,"Accepts Type: ",Object(r.b)("inlineCode",{parentName:"p"},"boolean")),Object(r.b)("p",null,"Set this to ",Object(r.b)("inlineCode",{parentName:"p"},"false"),". if you want to turn off creating IDs for sub-documents."),Object(r.b)("p",null,"Example:"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-ts"}),"class Nested {}\n\nclass Parent {\n  @prop({ _id: false })\n  public nest: Nested;\n}\n")),Object(r.b)("h3",{id:"ref"},"ref"),Object(r.b)("p",null,"Accepts Type: ",Object(r.b)("inlineCode",{parentName:"p"},"Class | string")),Object(r.b)("p",null,"Set which class to use for Reference (this cannot be inferred by the type)."),Object(r.b)("p",null,Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"/typegoose/docs/guides/advanced/reference-other-classes#common-problems"}),"->look here where ",Object(r.b)("inlineCode",{parentName:"a"},"Class")," cannot be used")),Object(r.b)("p",null,"Example:"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-ts"}),"class Nested {}\n\nclass Parent {\n  @prop({ ref: Nested })\n  public nest: Ref<Nested>;\n  // or\n  @prop({ ref: 'Nested' })\n  public nest: Ref<Nested>;\n}\n")),Object(r.b)("p",null,"The ",Object(r.b)("inlineCode",{parentName:"p"},"'Nested'")," form is useful to avoid unintuitive errors due to circular dependencies, such as\n",Object(r.b)("inlineCode",{parentName:"p"},'Error: Options "ref" is set, but is undefined/null!'),"."),Object(r.b)("h3",{id:"refpath"},"refPath"),Object(r.b)("p",null,"Accepts Type: ",Object(r.b)("inlineCode",{parentName:"p"},"string")),Object(r.b)("p",null,"Set which path to look for which Class to use."),Object(r.b)("p",null,"Example:"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-ts"}),"class Car {}\nclass Shop {}\n\n// in another class\nclass Another {\n  @prop({ required: true, enum: 'Car' | 'Shop' })\n  public which!: string;\n\n  @prop({ refPath: 'which' })\n  public kind?: Ref<Car | Shop>;\n}\n")),Object(r.b)("h3",{id:"reftype"},"refType"),Object(r.b)("p",null,"Accepts Type: ",Object(r.b)("inlineCode",{parentName:"p"},"mongoose.Schema.Types.Number")," ","|"," ",Object(r.b)("inlineCode",{parentName:"p"},"mongoose.Schema.Types.String")," ","|"," ",Object(r.b)("inlineCode",{parentName:"p"},"mongoose.Schema.Types.Buffer")," ","|"," ",Object(r.b)("inlineCode",{parentName:"p"},"mongoose.Schema.Types.ObjectId")),Object(r.b)("p",null,"Set which Type to use for refs."),Object(r.b)("p",null,"Deprecated since ",Object(r.b)("inlineCode",{parentName:"p"},"7.2.0"),", use ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"#type"}),Object(r.b)("inlineCode",{parentName:"a"},"@prop"),"'s ",Object(r.b)("inlineCode",{parentName:"a"},"type"))),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-ts"}),"class Nested {}\n\nclass Parent {\n  @prop({ ref: 'Nested', refType: mongoose.Schema.Types.ObjectId }) // it is a \"String\" because of reference errors\n  public nest: Ref<Nested>;\n}\n")),Object(r.b)("h3",{id:"validate"},"validate"),Object(r.b)("p",null,"Accepts Type: ",Object(r.b)("inlineCode",{parentName:"p"},"object")," OR ",Object(r.b)("inlineCode",{parentName:"p"},"RegExp")," OR ",Object(r.b)("inlineCode",{parentName:"p"},"(value) => boolean")," OR ",Object(r.b)("inlineCode",{parentName:"p"},"object[]")," Required options of the object:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"validator"),": ",Object(r.b)("inlineCode",{parentName:"li"},"(value) => boolean")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"message"),": ",Object(r.b)("inlineCode",{parentName:"li"},"String"),", the message shows when the validator fails")),Object(r.b)("p",null,"Set a custom function for validation (must return a boolean)."),Object(r.b)("p",null,"Example: (For more Examples look at ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"https://mongoosejs.com/docs/api.html#schematype_SchemaType-validate"}),"Mongoose's Documentation"),")"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-ts"}),"// \"maxlength\" already exists as an option, this just shows how to use validate\nclass Validated {\n  @prop({\n    validate: {\n      validator: (v) => {\n        return v.length <= 10;\n      },\n      message: 'value is over 10 characters long!'\n    }\n  })\n  public validated?: string;\n}\n")),Object(r.b)("h3",{id:"alias"},"alias"),Object(r.b)("p",null,"Accepts Type: ",Object(r.b)("inlineCode",{parentName:"p"},"string")),Object(r.b)("p",null,"Set an Alias for a property (best practice is to add type information for it)."),Object(r.b)("p",null,"-> For more information see the ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"https://mongoosejs.com/docs/guide.html#aliases"}),"mongoose documentation")),Object(r.b)("p",null,"Example:"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-ts"}),"class Dummy {\n  @prop({ alias: 'helloWorld' })\n  public hello: string; // will be included in the DB\n  public helloWorld: string; // will NOT be included in the DB, just for type completion (gets passed as hello in the DB)\n}\n")),Object(r.b)("h3",{id:"select"},"select"),Object(r.b)("p",null,"Accepts Type: ",Object(r.b)("inlineCode",{parentName:"p"},"boolean")),Object(r.b)("p",null,"Set it to ",Object(r.b)("inlineCode",{parentName:"p"},"false")," if you want to retrieve data without this property by default",Object(r.b)("br",{parentName:"p"}),"\n","-> ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"https://mongoosejs.com/docs/api.html#schematype_SchemaType-select"}),"Read more in Mongoose's offical documentation")),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-ts"}),"class Dummy {\n  @prop({ select: false })\n  public hello: string;\n}\n")),Object(r.b)("p",null,"In order to retrieve a prop marked as ",Object(r.b)("inlineCode",{parentName:"p"},"select: false"),", you must explicitly ask for it:"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-ts"}),"// find all in the collection and have the \"hello\" property selected\nconst dummies = await DummyModel.find().select('+hello').exec();\n")),Object(r.b)("p",null,"Note: ",Object(r.b)("inlineCode",{parentName:"p"},"select()")," accepts an array as well",Object(r.b)("br",{parentName:"p"}),"\n","Note: ",Object(r.b)("inlineCode",{parentName:"p"},"select()")," accepts a long string with space as a separator"),Object(r.b)("h3",{id:"get--set"},"get & set"),Object(r.b)("p",null,"Accepts Type: ",Object(r.b)("inlineCode",{parentName:"p"},"(input) => output")),Object(r.b)("p",null,"set gets & setters for fields, it is not virtual",Object(r.b)("br",{parentName:"p"}),"\n","-> both get & set must be defined all the time, even when just wanting to use one"),Object(r.b)("p",null,"Example:"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-ts"}),"class Dummy {\n  @prop({ set: (val: string) => val.toLowerCase(), get: (val: string) => val })\n  public hello: string;\n}\n")),Object(r.b)("h3",{id:"type"},"type"),Object(r.b)("p",null,"Accepts Type: ",Object(r.b)("inlineCode",{parentName:"p"},"any | () => any")),Object(r.b)("p",null,"Overwrite the type generated for the ",Object(r.b)("inlineCode",{parentName:"p"},"design:type")," reflection"),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Note"),": Mongoose initializes arrayProp arrays with ",Object(r.b)("inlineCode",{parentName:"p"},"[]")," instead of ",Object(r.b)("inlineCode",{parentName:"p"},"null")," / ",Object(r.b)("inlineCode",{parentName:"p"},"undefined")),Object(r.b)("p",null,"Example: Arrays (array item types can't be automatically inferred via Reflect)"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-ts"}),"class Dummy {\n  @prop({ type: String })\n  public hello: string[];\n}\n")),Object(r.b)("p",null,"Example: get as ",Object(r.b)("inlineCode",{parentName:"p"},"string[]"),", save as ",Object(r.b)("inlineCode",{parentName:"p"},"string")),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-ts"}),"class Dummy {\n  @prop({ set: (val: string[]) => val.join(' '), get: (val: string) => val.split(' '), type: String })\n  public hello: string[];\n}\n")),Object(r.b)("p",null,"Example: Overwrite type for an enum."),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-ts"}),"enum SomeEnum {\n  One,\n  Two\n}\nclass Dummy {\n  @prop({ enum: SomeEnum, type: Number })\n  public enumprop: SomeEnum;\n}\n")),Object(r.b)("p",null,"Example: Overwrite the inferred type as a last resort."),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-ts"}),"class Dummy {\n  @prop({ type: mongoose.Schema.Types.Mixed }) // used for mongoose / how it is stored to the DB\n  public something: NewableFunction; // used for intellisense / TypeScript\n}\n")),Object(r.b)("h3",{id:"enum"},"enum"),Object(r.b)("p",null,"Accepts Type: ",Object(r.b)("inlineCode",{parentName:"p"},"enum | any[]")),Object(r.b)("p",null,"Only allow values from the enum (best practice is to use TypeScript's enum)."),Object(r.b)("p",null,"Note: ",Object(r.b)("inlineCode",{parentName:"p"},"design:type")," will be set to ",Object(r.b)("inlineCode",{parentName:"p"},"String")," if the enum is full of Strings, and ",Object(r.b)("inlineCode",{parentName:"p"},"Number")," if full of Numbers, and ",Object(r.b)("inlineCode",{parentName:"p"},"Object")," of the enum\ncontains both."),Object(r.b)("p",null,"Example for String-Enums:"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-ts"}),"enum Gender {\n  MALE = 'male',\n  FEMALE = 'female'\n}\n\nclass Enumed {\n  @prop({ enum: Gender })\n  public gender?: Gender;\n}\n")),Object(r.b)("p",null,"Example for Number-Enums:",Object(r.b)("br",{parentName:"p"}),"\n","(since mongoose 5.8 and typegoose 6.2)"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-ts"}),'enum Gender {\n  MALE, // equal to "= 0"\n  FEMALE // equal to "= 1"\n}\n\nclass Enumed {\n  @prop({ enum: Gender })\n  public gender?: Gender;\n}\n')),Object(r.b)("p",null,"Known-Issues:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Babel doesn't set the type for enums correctly. They need to be set manually with ",Object(r.b)("a",Object(a.a)({parentName:"li"},{href:"#type"}),"the ",Object(r.b)("inlineCode",{parentName:"a"},"type")," option")),Object(r.b)("li",{parentName:"ul"},"If transpiling your code with ",Object(r.b)("inlineCode",{parentName:"li"},"tsc --transpile-only")," or ",Object(r.b)("inlineCode",{parentName:"li"},"ts-node -- transpile-only"),", then the ",Object(r.b)("inlineCode",{parentName:"li"},"--transpile-only")," needs to be removed or the type needs to be set manually with ",Object(r.b)("a",Object(a.a)({parentName:"li"},{href:"#type"}),"the ",Object(r.b)("inlineCode",{parentName:"a"},"type")," option"))),Object(r.b)("h3",{id:"addnulltoenum"},"addNullToEnum"),Object(r.b)("p",null,"Accepts Type: ",Object(r.b)("inlineCode",{parentName:"p"},"boolean")),Object(r.b)("p",null,'Adds "null" to the enum array.'),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Note"),": this doesn't work if the value is ",Object(r.b)("inlineCode",{parentName:"p"},"required")),Object(r.b)("p",null,"Example:"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-ts"}),"enum SomeNumberEnum {\n  one = 1,\n  two = 2\n}\nclass AddNullToEnum {\n  @prop({ enum: SomeNumberEnum, addNullToEnum: true })\n  public value?: SomeNumberEnum;\n}\n\nconst AddNullToEnumModel = getModelForClass(AddNullToEnum);\n\nAddNullToEnumModel.schema.path('value').options.enum === [1, 2, null]; // true\n\n// this allows to do the following without an validation error\nnew AddNullToEnumModel({ value: null } as AddNullToEnum);\n")),Object(r.b)("h3",{id:"discriminators"},"discriminators"),Object(r.b)("p",null,"Accepts Type: ",Object(r.b)("inlineCode",{parentName:"p"},"() => [DiscriminatorObject | Class]")),Object(r.b)("p",null,"Use this function for embedded discriminators."),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Note"),": the ",Object(r.b)("inlineCode",{parentName:"p"},"discriminatorKey")," (like in the example property ",Object(r.b)("inlineCode",{parentName:"p"},"type"),") needs to be always set in a newly created document (via ",Object(r.b)("inlineCode",{parentName:"p"},'.create({..., type: "..."})'),", or ",Object(r.b)("inlineCode",{parentName:"p"},".save()"),")"),Object(r.b)("p",null,"Example for ",Object(r.b)("inlineCode",{parentName:"p"},"[Class]"),":"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-ts"}),"@modelOptions({\n  schemaOptions: {\n    discriminatorKey: 'type'\n  }\n})\nclass Building {\n  @prop({ default: 100 })\n  public width: number;\n\n  @prop({ required: true })\n  public type: string;\n}\n\nclass Garage extends Building {\n  @prop({ default: 10 })\n  public slotsForCars: number;\n}\n\nclass SummerHouse extends Building {\n  @prop({ default: 100 })\n  public distanceToLake: number;\n}\n\nclass Area {\n  @prop({ type: Building, discriminators: () => [Garage, SummerHouse] })\n  public buildings: Building[];\n}\n\nconst AreaModel = getModelForClass(Area);\n\n// then somewhere in an async function\nconst area = await AreaModel.create({});\narea.buildings.push({ type: getName(SummerHouse), distanceToLake: 100 } as SummerHouse);\narea.buildings.push({ type: getName(Garage), slotsForCars: 20 } as Garage);\nawait area.save();\n")),Object(r.b)("p",null,"Example for ",Object(r.b)("inlineCode",{parentName:"p"},"[DiscriminatorObject]"),":"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-ts"}),"@modelOptions({\n  schemaOptions: {\n    discriminatorKey: 'type'\n  }\n})\nclass Building {\n  @prop({ default: 100 })\n  public width: number;\n\n  @prop({ required: true })\n  public type: string;\n}\n\nclass Garage extends Building {\n  @prop({ default: 10 })\n  public slotsForCars: number;\n}\n\nclass SummerHouse extends Building {\n  @prop({ default: 100 })\n  public distanceToLake: number;\n}\n\nclass Area {\n  @prop({\n    type: Building,\n    discriminators: () => [\n      { type: Garage, value: 'G' },\n      { type: SummerHouse, value: 'S' }\n    ]\n  })\n  public buildings: Building[];\n}\n\nconst AreaModel = getModelForClass(Area);\n\n// then somewhere in an async function\nconst area = await AreaModel.create({});\narea.buildings.push({ type: 'S', distanceToLake: 100 } as SummerHouse);\narea.buildings.push({ type: 'G', slotsForCars: 20 } as Garage);\nawait area.save();\n")),Object(r.b)("h3",{id:"inneroptions"},"innerOptions"),Object(r.b)("p",null,Object(r.b)("inlineCode",{parentName:"p"},"innerOptions"),' is used to overwrite options to be at the "Type" level',Object(r.b)("br",{parentName:"p"}),"\n","-> Use this only when absolutely necessary and please open a new\nissue about it"),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Note"),": this option can be used everywhere ",Object(r.b)("inlineCode",{parentName:"p"},"mapOptions")," function is called (currently being ",Object(r.b)("inlineCode",{parentName:"p"},"WhatIsIt.ARRAY")," and ",Object(r.b)("inlineCode",{parentName:"p"},"WhatIsIt.MAP"),")"),Object(r.b)("p",null,"Example:"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-ts"}),"class Something {\n  @prop({ required: true })\n  public propy: string[];\n}\n\n// This would be mapped to\n{\n  type: [{ type: String }],\n  required: true\n}\n\n// when using the overwrite\nclass Something {\n  @prop({ innerOptions: { required: true } })\n  public propy: string[];\n}\n\n// This would be mapped to\n{\n  type: [{ type: String, required: true }]\n}\n")),Object(r.b)("h3",{id:"outeroptions"},"outerOptions"),Object(r.b)("p",null,Object(r.b)("inlineCode",{parentName:"p"},"outerOptions"),' is used to overwrite options to be at the "Array" level',Object(r.b)("br",{parentName:"p"}),"\n","-> Use this only when absolutely necessary and please open a new\nissue about it"),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Note"),": this option can be used everywhere ",Object(r.b)("inlineCode",{parentName:"p"},"mapOptions")," function is called (currently being ",Object(r.b)("inlineCode",{parentName:"p"},"WhatIsIt.ARRAY")," and ",Object(r.b)("inlineCode",{parentName:"p"},"WhatIsIt.MAP"),")"),Object(r.b)("p",null,"Example:"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-ts"}),"class Something {\n  @prop({ maxlength: 1 })\n  public propy: string[];\n}\n\n// This would be mapped to\n{\n  type: [{ type: String, maxlength: 1 }]\n}\n\n// when using the overwrite\nclass Something {\n  @prop({ outerOptions: { maxlength: 1 } })\n  public propy: string[];\n}\n\n// This would be mapped to\n{\n  type: [{ type: String }],\n  maxlength: 1\n}\n")),Object(r.b)("h3",{id:"array-options"},"Array Options"),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Note"),": option ",Object(r.b)("inlineCode",{parentName:"p"},"type"),"(formally ",Object(r.b)("inlineCode",{parentName:"p"},"items"),") must be provided, otherwise the array will result in ",Object(r.b)("inlineCode",{parentName:"p"},"Mixed")," ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/typegoose/typegoose/issues/300"}),"read typegoose issue #300 for more")),Object(r.b)("p",null,"Example:"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-ts"}),'class Kitten {\n  @prop()\n  public name?: string;\n}\n\nclass Cat {\n  @prop({ type: () => [Kitten] })\n  public kitten?: Kitten[]; // "[]" or "Array<any>" or "mongoose.Types.Array<any>" is needed to be detected as an Array\n}\n')),Object(r.b)("h4",{id:"items"},"items"),Object(r.b)("p",null,"Accepts Type: ",Object(r.b)("inlineCode",{parentName:"p"},"any"),Object(r.b)("br",{parentName:"p"}),"\n","(alias for ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"#type"}),Object(r.b)("inlineCode",{parentName:"a"},"type"))," from ",Object(r.b)("inlineCode",{parentName:"p"},"@prop"),")"),Object(r.b)("p",null,"Deprecated since ",Object(r.b)("inlineCode",{parentName:"p"},"7.2.0"),", use ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"#type"}),Object(r.b)("inlineCode",{parentName:"a"},"@prop"),"'s ",Object(r.b)("inlineCode",{parentName:"a"},"type"))),Object(r.b)("p",null,"(see ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"#type"}),Object(r.b)("inlineCode",{parentName:"a"},"type"))," for Examples)"),Object(r.b)("h4",{id:"dim"},"dim"),Object(r.b)("p",null,Object(r.b)("inlineCode",{parentName:"p"},"dim")," is used to set the Dimensions this array should have (for something like an matrix)",Object(r.b)("br",{parentName:"p"}),"\n","-> needs to be higher than 0",Object(r.b)("br",{parentName:"p"}),"\n","-> ",Object(r.b)("strong",{parentName:"p"},"This Option is overwritten by using ",Object(r.b)("inlineCode",{parentName:"strong"},"type () => [Type]"))),Object(r.b)("p",null,"Example:"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-ts"}),"class Something {\n  @prop({ dim: 3, type: String })\n  public propy: string[][][];\n}\n\n// This would be mapped to\n{\n  type: [[[{ type: String }]]]\n}\n")),Object(r.b)("p",null,"This Option can be ommitted if the following way is used: (since 7.4.0)"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-ts"}),"class ArrayInType {\n  @prop({ type: () => [[String]] }) // dim is 2\n  public propy: string[][];\n\n  @prop({ type: () => [String] }) // dim is 1\n  public propy: string[];\n}\n")),Object(r.b)("h3",{id:"map-options"},"Map Options"),Object(r.b)("p",null,"Example:"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-ts"}),'class SomeMapClass {\n  @prop({ type: String })\n  public lookup?: Map<string, string>; // "Map<any, any>" or "mongoose.Types.Map<any>" is needed to be detected as an Map\n}\n')),Object(r.b)("h4",{id:"of"},"of"),Object(r.b)("p",null,"Accepts Type: ",Object(r.b)("inlineCode",{parentName:"p"},"any"),Object(r.b)("br",{parentName:"p"}),"\n","(alias for ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"#type"}),Object(r.b)("inlineCode",{parentName:"a"},"type"))," from ",Object(r.b)("inlineCode",{parentName:"p"},"@prop"),")"),Object(r.b)("p",null,"Deprecated since ",Object(r.b)("inlineCode",{parentName:"p"},"7.2.0"),", use ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"#type"}),Object(r.b)("inlineCode",{parentName:"a"},"@prop"),"'s ",Object(r.b)("inlineCode",{parentName:"a"},"type"))),Object(r.b)("p",null,"(see ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"#type"}),Object(r.b)("inlineCode",{parentName:"a"},"type"))," for Examples)"),Object(r.b)("h3",{id:"string-transform-options"},"String Transform options"),Object(r.b)("h4",{id:"lowercase"},"lowercase"),Object(r.b)("p",null,"Accepts Type: ",Object(r.b)("inlineCode",{parentName:"p"},"boolean")),Object(r.b)("p",null,"Set this to ",Object(r.b)("inlineCode",{parentName:"p"},"true"),", if the value should always be lowercased."),Object(r.b)("p",null,"Example:"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-ts"}),'class LowerCased {\n  @prop({ lowercase: true })\n  public lowerCase: string; // "HELLO" -> "hello"\n}\n')),Object(r.b)("h4",{id:"uppercase"},"uppercase"),Object(r.b)("p",null,"Accepts Type: ",Object(r.b)("inlineCode",{parentName:"p"},"boolean")),Object(r.b)("p",null,"Set this to ",Object(r.b)("inlineCode",{parentName:"p"},"true"),", if the value should always be UPPERCASED. "),Object(r.b)("p",null,"Example:"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-ts"}),'class UpperCased {\n  @prop({ uppercase: true })\n  public upperCase: string; // "hello" -> "HELLO"\n}\n')),Object(r.b)("h4",{id:"trim"},"trim"),Object(r.b)("p",null,"Accepts Type: ",Object(r.b)("inlineCode",{parentName:"p"},"boolean")),Object(r.b)("p",null,"Set this to ",Object(r.b)("inlineCode",{parentName:"p"},"true"),", if the value should always be trimmed."),Object(r.b)("p",null,"Example:"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-ts"}),'class Trimmed {\n  @prop({ trim: true })\n  public trim: string; // "   Trim me   " -> "Trim me"\n}\n')),Object(r.b)("h3",{id:"string-validation-options"},"String Validation options"),Object(r.b)("h4",{id:"maxlength"},"maxlength"),Object(r.b)("p",null,"Accepts Type: ",Object(r.b)("inlineCode",{parentName:"p"},"number")),Object(r.b)("p",null,"Sets the maximum length the string can have."),Object(r.b)("p",null,"Example:"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-ts"}),"class MaxLengthed {\n  @prop({ maxlength: 10 })\n  public maxlengthed?: string; // the string can only be 10 characters long\n}\n")),Object(r.b)("h4",{id:"minlength"},"minlength"),Object(r.b)("p",null,"Accepts Type: ",Object(r.b)("inlineCode",{parentName:"p"},"number")),Object(r.b)("p",null,"Sets the minimum length the string can have (must be above 0)."),Object(r.b)("p",null,"Example:"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-ts"}),"class MinLengthed {\n  @prop({ minlength: 10 })\n  public minlengthed?: string; // the string must be at least 10 characters long\n}\n")),Object(r.b)("h4",{id:"match"},"match"),Object(r.b)("p",null,"Accepts Type: ",Object(r.b)("inlineCode",{parentName:"p"},"RegExp")),Object(r.b)("p",null,"Sets a Regular Expression for the string must match."),Object(r.b)("p",null,"Example:"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-ts"}),"class RegExpString {\n  @prop({ match: /^H/i })\n  public matched?: string;\n}\n")),Object(r.b)("h3",{id:"number-validation-options"},"Number Validation options"),Object(r.b)("h4",{id:"max"},"max"),Object(r.b)("p",null,"Accepts Type: ",Object(r.b)("inlineCode",{parentName:"p"},"number")),Object(r.b)("p",null,"Sets the maximum value the number property can have."),Object(r.b)("p",null,"Example:"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-ts"}),"class Maxed {\n  @prop({ max: 10 })\n  public maxed?: number; // the value can be at most 10\n}\n")),Object(r.b)("h4",{id:"min"},"min"),Object(r.b)("p",null,"Accepts Type: ",Object(r.b)("inlineCode",{parentName:"p"},"number")),Object(r.b)("p",null,"Sets the minimum value the number property can have."),Object(r.b)("p",null,"Example:"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-ts"}),"class Mined {\n  @prop({ min: 0 })\n  public mined?: number; // the value must be at least 0\n}\n")))}c.isMDXComponent=!0},119:function(e,n,t){"use strict";t.d(n,"a",(function(){return s})),t.d(n,"b",(function(){return d}));var a=t(0),p=t.n(a);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function b(e,n){if(null==e)return{};var t,a,p=function(e,n){if(null==e)return{};var t,a,p={},r=Object.keys(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||(p[t]=e[t]);return p}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(p[t]=e[t])}return p}var o=p.a.createContext({}),c=function(e){var n=p.a.useContext(o),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},s=function(e){var n=c(e.components);return p.a.createElement(o.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return p.a.createElement(p.a.Fragment,{},n)}},m=p.a.forwardRef((function(e,n){var t=e.components,a=e.mdxType,r=e.originalType,l=e.parentName,o=b(e,["components","mdxType","originalType","parentName"]),s=c(t),m=a,d=s["".concat(l,".").concat(m)]||s[m]||u[m]||r;return t?p.a.createElement(d,i(i({ref:n},o),{},{components:t})):p.a.createElement(d,i({ref:n},o))}));function d(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var r=t.length,l=new Array(r);l[0]=m;var i={};for(var b in n)hasOwnProperty.call(n,b)&&(i[b]=n[b]);i.originalType=e,i.mdxType="string"==typeof e?e:a,l[1]=i;for(var o=2;o<r;o++)l[o]=t[o];return p.a.createElement.apply(null,l)}return p.a.createElement.apply(null,t)}m.displayName="MDXCreateElement"}}]);