webpackJsonp(["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/about-arkad/about-arkad.component.css":
/***/ (function(module, exports) {

module.exports = ".about-content{\n    padding-bottom: 40px;\n}\n\n.row.stats.stats-2,\n.sidebar-blog-categories ul,\n.sidebar-categories ul {\n    background: #f4f5f8\n}\n\n.sidebar-blog-categories ul li a,\n.sidebar-categories ul li a {\n    font-size: 17px;\n    color: #61656f;\n    padding: 24px 30px;\n    display: block;\n    line-height: 1;\n    border-bottom: 1px solid #fcfcfd\n}\n\n.sidebar-blog-categories ul li a.active,\n.sidebar-categories ul li a.active {\n    color: #fff;\n    background: #a6ce39\n}\n\n.sidebar-categories ul li a:hover {\n    background: #e9e9e9\n}\n\n.sidebar>div {\n    margin-bottom: 45px\n}\n\n.sidebar>div:last-child,\ndiv.process-bar>.skillbar:last-child {\n    margin-bottom: 0\n}\n\n\n"

/***/ }),

/***/ "./src/app/about-arkad/about-arkad.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"wrapper\">\n<app-header></app-header>\n\n<div class=\"container\">\n  <div class=\"row about-sidebar\">\n\n      <div class=\"col-md-3 sidebar left hidden-sm hidden-xs\">\n          <div class=\"sidebar-blog-categories\">\n<ul>\n<li> <a href=\"who_are_we.php\"                     class=\"active\"> About Arkad </a> </li>\n<li> <a href=\"where_are_we_going.php\"             class=\"\"> Strategic Vision </a> </li>\n<li> <a href=\"arkad_value.php\"                  class=\"\"> Arkad Values </a> </li>\n<li> <a href=\"corporate_governance.php\"         class=\"\"> Corporate Governance </a> </li>\n\n\n</ul>\n</div>\n  </div>\n\n      <div class=\"col-md-9 about-content\">\n          <section class=\"about-company\">\n              <div class=\"com\">\n                  <!-- <h4 class=\"company-subtitle subtitle\"> ARKAD, Who are we?</h4>\n                  <div class=\"spacer-40\"></div> -->\n                  <div class=\"col-md-5\">\n                    <p style=\"margin-bottom: 0px;\">ARKAD is proudly the largest locally Saudi Arabian established and owned energy services company with a growing global portfolio, recognized for our world-class capabilities – as an innovative, delivery focused transformational learning organization. Our assets and projects are renowned for their safety, reliability and efficiency for delivery, Today, we continue to be at the forefront of our industry by seeking to grow new markets globally. Headquartered in Al Khobar, Saudi Arabia,</p>\n                  </div>\n\n                  <div class=\"col-md-7\">\n                    <img src=\"assets/images/aboutus.jpg\" align=\"center\" style=\"padding: 5px;\"/>\n                  </div>\n                  <div class=\"col-md-12\">\n                  <p> our core team has grown to more than 8,500 employees. As a team, we have established our credentials of being a comprehensive, single-point service provider for multiple energy sector industries.</p>\n\n                  <p>Currently we own and operate the world’s largest fleet of pipeline construction side booms and associated welding equipment technology. We continue to expand our capabilities in marketing, developing disruptive technology (R&D) to enable value creation in reducing client’s costs for services and have enduring strong relationships developed over the last 5 years with foundation customers throughout the Middle Eastern region.</p>\n                  <p>Our aggressive global expansion strategy for growth outside the Kingdom of Saudi Arabia will come into full reality towards the end of 2017. This strategy has a focus of new energy value chains, and focus on emerging and frontier energy markets and customers in Europe, the Americas, the Asia-Pacific region, the emerging African markets. </p>\n                  <p>We believe that technology and innovation are essential to bringing down costs and unlocking future growth challenging traditional industry thinking and norms creating value for our company, the Kingdom, region and clients globally during this period of uncertain and rapidly changing energy markets.</p>\n                  <p>We recognize that long-term meaningful relationships with communities are fundamental to maintaining our license to operate, and we work to build mutually beneficial relationships.</p>\n                  <p>ARKAD is characterized by a strong safety and environmental performance in all locations where we are active and we are committed to upholding our company values of integrity, respect, working sustainably, discipline, excellence and working together.</p>\n                  <p>Our success is driven by our people and we aim to attract, develop, invest in and retain a diverse high-performing local workforce. Our proven track record, distinctive capabilities and ability to manage risk and volatility are underpinned by developing our talent internally by gaining access to global experts in their respective fields. These factors enable us to drive a dynamic and driven organizational culture, making us the clear partner of choice, where no challenge is to great or unachievable.</p>\n                </div>\n              </div>\n          </section>\n      </div>\n\n      \n\n  </div>\n</div>\n\n</div>\n\n\n<!-- Main Content Section -->\n<app-footer></app-footer>"

/***/ }),

/***/ "./src/app/about-arkad/about-arkad.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AboutArkadComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AboutArkadComponent = /** @class */ (function () {
    function AboutArkadComponent() {
    }
    AboutArkadComponent.prototype.ngOnInit = function () {
    };
    AboutArkadComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-about-arkad',
            template: __webpack_require__("./src/app/about-arkad/about-arkad.component.html"),
            styles: [__webpack_require__("./src/app/about-arkad/about-arkad.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], AboutArkadComponent);
    return AboutArkadComponent;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>"

/***/ }),

/***/ "./src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'app';
    }
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("./src/app/app.component.html"),
            styles: [__webpack_require__("./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_component__ = __webpack_require__("./src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_route__ = __webpack_require__("./src/app/app.route.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__header_header_component__ = __webpack_require__("./src/app/header/header.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__homepage_homepage_component__ = __webpack_require__("./src/app/homepage/homepage.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__footer_footer_component__ = __webpack_require__("./src/app/footer/footer.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__about_arkad_about_arkad_component__ = __webpack_require__("./src/app/about-arkad/about-arkad.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__strategic_vision_strategic_vision_component__ = __webpack_require__("./src/app/strategic-vision/strategic-vision.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__arkad_values_arkad_values_component__ = __webpack_require__("./src/app/arkad-values/arkad-values.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__corporate_governance_corporate_governance_component__ = __webpack_require__("./src/app/corporate-governance/corporate-governance.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__construction_services_construction_services_component__ = __webpack_require__("./src/app/construction-services/construction-services.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__project_management_project_management_component__ = __webpack_require__("./src/app/project-management/project-management.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__engineering_services_engineering_services_component__ = __webpack_require__("./src/app/engineering-services/engineering-services.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__research_development_research_development_component__ = __webpack_require__("./src/app/research-development/research-development.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__sustainability_sustainability_component__ = __webpack_require__("./src/app/sustainability/sustainability.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__projects_projects_component__ = __webpack_require__("./src/app/projects/projects.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__news_news_component__ = __webpack_require__("./src/app/news/news.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__carrers_carrers_component__ = __webpack_require__("./src/app/carrers/carrers.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_5__header_header_component__["a" /* HeaderComponent */],
                __WEBPACK_IMPORTED_MODULE_6__homepage_homepage_component__["a" /* HomepageComponent */],
                __WEBPACK_IMPORTED_MODULE_7__footer_footer_component__["a" /* FooterComponent */],
                __WEBPACK_IMPORTED_MODULE_8__about_arkad_about_arkad_component__["a" /* AboutArkadComponent */],
                __WEBPACK_IMPORTED_MODULE_9__strategic_vision_strategic_vision_component__["a" /* StrategicVisionComponent */],
                __WEBPACK_IMPORTED_MODULE_10__arkad_values_arkad_values_component__["a" /* ArkadValuesComponent */],
                __WEBPACK_IMPORTED_MODULE_11__corporate_governance_corporate_governance_component__["a" /* CorporateGovernanceComponent */],
                __WEBPACK_IMPORTED_MODULE_12__construction_services_construction_services_component__["a" /* ConstructionServicesComponent */],
                __WEBPACK_IMPORTED_MODULE_13__project_management_project_management_component__["a" /* ProjectManagementComponent */],
                __WEBPACK_IMPORTED_MODULE_14__engineering_services_engineering_services_component__["a" /* EngineeringServicesComponent */],
                __WEBPACK_IMPORTED_MODULE_15__research_development_research_development_component__["a" /* ResearchDevelopmentComponent */],
                __WEBPACK_IMPORTED_MODULE_16__sustainability_sustainability_component__["a" /* SustainabilityComponent */],
                __WEBPACK_IMPORTED_MODULE_17__projects_projects_component__["a" /* ProjectsComponent */],
                __WEBPACK_IMPORTED_MODULE_18__news_news_component__["a" /* NewsComponent */],
                __WEBPACK_IMPORTED_MODULE_19__carrers_carrers_component__["a" /* CarrersComponent */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */], __WEBPACK_IMPORTED_MODULE_3__app_route__["a" /* routingModule */], __WEBPACK_IMPORTED_MODULE_4__angular_router__["a" /* RouterModule */]
            ],
            providers: [],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/app.route.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return routingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__carrers_carrers_component__ = __webpack_require__("./src/app/carrers/carrers.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__news_news_component__ = __webpack_require__("./src/app/news/news.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__projects_projects_component__ = __webpack_require__("./src/app/projects/projects.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__project_management_project_management_component__ = __webpack_require__("./src/app/project-management/project-management.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__construction_services_construction_services_component__ = __webpack_require__("./src/app/construction-services/construction-services.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__corporate_governance_corporate_governance_component__ = __webpack_require__("./src/app/corporate-governance/corporate-governance.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__arkad_values_arkad_values_component__ = __webpack_require__("./src/app/arkad-values/arkad-values.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__footer_footer_component__ = __webpack_require__("./src/app/footer/footer.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__header_header_component__ = __webpack_require__("./src/app/header/header.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__homepage_homepage_component__ = __webpack_require__("./src/app/homepage/homepage.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__about_arkad_about_arkad_component__ = __webpack_require__("./src/app/about-arkad/about-arkad.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__strategic_vision_strategic_vision_component__ = __webpack_require__("./src/app/strategic-vision/strategic-vision.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__engineering_services_engineering_services_component__ = __webpack_require__("./src/app/engineering-services/engineering-services.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__research_development_research_development_component__ = __webpack_require__("./src/app/research-development/research-development.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__sustainability_sustainability_component__ = __webpack_require__("./src/app/sustainability/sustainability.component.ts");
















var routes = [
    {
        path: '',
        component: __WEBPACK_IMPORTED_MODULE_9__homepage_homepage_component__["a" /* HomepageComponent */]
    },
    {
        path: 'header',
        component: __WEBPACK_IMPORTED_MODULE_8__header_header_component__["a" /* HeaderComponent */]
    },
    {
        path: 'footer',
        component: __WEBPACK_IMPORTED_MODULE_7__footer_footer_component__["a" /* FooterComponent */]
    },
    {
        path: 'about-Arkad',
        component: __WEBPACK_IMPORTED_MODULE_11__about_arkad_about_arkad_component__["a" /* AboutArkadComponent */]
    },
    {
        path: 'strategic-vision',
        component: __WEBPACK_IMPORTED_MODULE_12__strategic_vision_strategic_vision_component__["a" /* StrategicVisionComponent */]
    },
    {
        path: 'arkad-values',
        component: __WEBPACK_IMPORTED_MODULE_6__arkad_values_arkad_values_component__["a" /* ArkadValuesComponent */]
    },
    {
        path: 'coporate-governance',
        component: __WEBPACK_IMPORTED_MODULE_5__corporate_governance_corporate_governance_component__["a" /* CorporateGovernanceComponent */]
    },
    {
        path: 'construction-services',
        component: __WEBPACK_IMPORTED_MODULE_4__construction_services_construction_services_component__["a" /* ConstructionServicesComponent */]
    },
    {
        path: 'project-management',
        component: __WEBPACK_IMPORTED_MODULE_3__project_management_project_management_component__["a" /* ProjectManagementComponent */]
    },
    {
        path: 'engineering-services',
        component: __WEBPACK_IMPORTED_MODULE_13__engineering_services_engineering_services_component__["a" /* EngineeringServicesComponent */]
    },
    {
        path: 'research-developement',
        component: __WEBPACK_IMPORTED_MODULE_14__research_development_research_development_component__["a" /* ResearchDevelopmentComponent */]
    },
    {
        path: 'sustainability',
        component: __WEBPACK_IMPORTED_MODULE_15__sustainability_sustainability_component__["a" /* SustainabilityComponent */]
    },
    {
        path: 'projects',
        component: __WEBPACK_IMPORTED_MODULE_2__projects_projects_component__["a" /* ProjectsComponent */]
    },
    {
        path: 'news',
        component: __WEBPACK_IMPORTED_MODULE_1__news_news_component__["a" /* NewsComponent */]
    },
    {
        path: 'careers',
        component: __WEBPACK_IMPORTED_MODULE_0__carrers_carrers_component__["a" /* CarrersComponent */]
    }
];
var routingModule = __WEBPACK_IMPORTED_MODULE_10__angular_router__["a" /* RouterModule */].forRoot(routes);


/***/ }),

/***/ "./src/app/arkad-values/arkad-values.component.css":
/***/ (function(module, exports) {

module.exports = ".heading {\n    color: #a6ce39;\n    font-size: 20px;\n}\n\n.about-content{\n    padding-bottom: 40px;\n}\n\n.row.stats.stats-2,\n.sidebar-blog-categories ul,\n.sidebar-categories ul {\n    background: #f4f5f8\n}\n\n.sidebar-blog-categories ul li a,\n.sidebar-categories ul li a {\n    font-size: 17px;\n    color: #61656f;\n    padding: 24px 30px;\n    display: block;\n    line-height: 1;\n    border-bottom: 1px solid #fcfcfd\n}\n\n.sidebar-blog-categories ul li a.active,\n.sidebar-categories ul li a.active {\n    color: #fff;\n    background: #a6ce39\n}\n\n.sidebar-categories ul li a:hover {\n    background: #e9e9e9\n}\n\n.sidebar>div {\n    margin-bottom: 45px\n}\n\n.sidebar>div:last-child,\ndiv.process-bar>.skillbar:last-child {\n    margin-bottom: 0\n}\n\n\n"

/***/ }),

/***/ "./src/app/arkad-values/arkad-values.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"wrapper\">\n<app-header></app-header>\n\n<div class=\"container\">\n\n\n  <div class=\"row about-sidebar\">\n\n      <div class=\"col-md-3 sidebar left hidden-sm hidden-xs\">\n          <div class=\"sidebar-blog-categories\">\n<ul>\n<li> <a href=\"who_are_we.php\"                     class=\"\"> About Arkad </a> </li>\n<li> <a href=\"where_are_we_going.php\"             class=\"\"> Strategic Vision </a> </li>\n<li> <a href=\"arkad_value.php\"                  class=\"active\"> Arkad Values </a> </li>\n<li> <a href=\"corporate_governance.php\"         class=\"\"> Corporate Governance </a> </li>\n\n\n</ul>\n</div>\n  </div>\n\n      <div class=\"col-md-9 about-content\">\n          <section class=\"about-culture\">\n              <div class=\"row culture\">\n                  <div class=\"col-sm-12 cul\">\n                      <div class=\"col-md-5\">\n                        <!-- <h2 class=\"culture-title subtitle\"> Arkad Values </h2> -->\n                      <p style=\"text-align: left;\">We have overcome some incredible challenges to be where we are today. Now, the way ahead is full of opportunity. The ARKAD Values will guide us on our journey towards being a global leader in our fields.We are a proud Saudi Arabian company with a history of achievement.  We believe that by doing what’s right, we can perform to our very best. </p>\n                    </div>\n                      <div class=\"col-md-7\">\n                        <img  src=\"assets/images/values.jpg\" />\n                      </div>\n                      <div class=\"col-md-12\">\n                        <p>This means living our values every day.</p>\n                        <p><span class=\"bold\">Integrity</span> - We are open, honest and fair. We do what we say we will do. We have the courage to do the right thing. </p>\n                        <p><span class=\"bold\">Respect</span> - We treat everyone fairly. We listen. </p>\n                        <p><span class=\"bold\">Working Sustainably</span> -We are here for the long term. We look after each other, our communities and our environment. We keep each other safe. </p>\n                        <p><span class=\"bold\">Working Together</span> - We are on the same team. We build long-term partnerships. </p>\n                        <p><span class=\"bold\">Discipline </span> - We play by the rules. We set goals and we hold ourselves to account.</p>\n                        <p><span class=\"bold\">Excellence </span> - We achieve remarkable results. We learn. We get better.</p>\n\n                        <p class=\"heading\">Where We’re Going </p>\n                        <p><span class=\"bold\">Our Mission</span> to deliver superior shareholder returns and establish a Saudi Arabian business on the global stage.</p>\n                        <p><span class=\"bold\">Our Vision</span> is to be a global leader in oil and gas, petrochemical, nuclear, mining, renewable energy technologies, providing support, engineering and construction services.</p>\n                        <p><span class=\"bold\">Our Strategoc Direction</span> Maintain our growth position by optimizing our core business and commercializing our growth projects and other premium opportunities. Grow our international portfolio by leveraging our core capabilities for engineering and construction support services.</p>\n\n                        <p class=\"heading\">How We'll Get There </p>\n                        <p><span class=\"bold\">Partner of Choice</span> We are the premium choice for partnerships based on our distinctive capabilities, culture and track record as a great partner.</p>\n                        <p><span class=\"bold\">Engaged People</span> We work for a highly regarded and successful company. We are part of a team working together for great results and have opportunities to contribute and grow.</p>\n                        <p><span class=\"bold\">Functional Excellence</span> We leverage our core capabilities and the latest technology to create new opportunities and sharpen our competitive edge.</p>\n                        <p><span class=\"bold\">Decision Effectiveness</span> We make and execute decisions in line with our business priorities and our ARKAD values.</p>\n                      </div>\n                  </div>\n              </div>\n          </section>\n      </div>\n\n     \n\n  </div>\n\n</div>\n</div>\n<app-footer></app-footer>\n"

/***/ }),

/***/ "./src/app/arkad-values/arkad-values.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ArkadValuesComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ArkadValuesComponent = /** @class */ (function () {
    function ArkadValuesComponent() {
    }
    ArkadValuesComponent.prototype.ngOnInit = function () {
    };
    ArkadValuesComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-arkad-values',
            template: __webpack_require__("./src/app/arkad-values/arkad-values.component.html"),
            styles: [__webpack_require__("./src/app/arkad-values/arkad-values.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ArkadValuesComponent);
    return ArkadValuesComponent;
}());



/***/ }),

/***/ "./src/app/carrers/carrers.component.css":
/***/ (function(module, exports) {

module.exports = "#nav hover .sub-nav {\n    display: block;\n    position: absolute;\n    padding: 1px;\n    width: 200px;\n    top: 32px;\n    left: -1px;\n    background: #FFF;\n    border: 1px solid #E7E8E9;\n    border-radius: 3px;\n    padding: 8px;\n}\n#nav hover .sub-nav {\n    background: #455253;\n    border: 1px solid #455253;\n}\n#nav hover {\n    position: relative;\n    z-index: 200;\n}"

/***/ }),

/***/ "./src/app/carrers/carrers.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"home\">\n<div id=\"frame-fullpage\">\n\n\n  <header id=\"masthead-wrapper\" class=\"pngfix\">\n  \n  <a href=\"javascript:;\" class=\"hamburger_menujs phone_show r margin-reset\"><i class=\"arkad_sp arkad_sp-hamburger\"></i></a>\n  <div id=\"masthead\" class=\"block_wide_m\">\n  \n  <div id=\"logo\" class=\"grid-2 l\">\n  \n  \n      <a href=\"http://arkad.com/\">\n        <img src=\"https://img0bm.b8cdn.com/images/templates/arkad/arkad-logo-home.png\" alt=\"Arkad\" class=\"pngfix\" />\n      </a>\n    \n  \n  </div>\n  <div class=\"l grid-8 grid-p-5 mast-content\">\n  \n  <div class=\"bcc_top_action_menu margin_side_0_md r margin-reset\">\n  \n              \n              <button class=\"login_btn_top r phone_show\" onClick=\"window.location='/en/login/'\">\n                Log In\n              </button>\n            \n  \n  </div>\n  <nav id=\"nav-wrapper\" class=\"margin-reset r\">\n  <a href=\"javascript:;\" class=\"close_main_menu phone_show\"><i class=\"arkad_sp arkad_sp-close\"></i></a>\n  <div class=\"quick_search_top r\">\n    <form method=\"get\" action=\"/en/job-search-results/\">\n      <input type=\"text\" name=\"keyword\" class=\"keywords_input_top hide\" placeholder=\"Job Title\" />\n      <a href=\"javascript:;\" class=\"search_top_js phone_hide\"><i class=\"i-search-16 tWhite vert_algn_mid\"></i></a>\n    </form>\n  </div>\n  <ul id=\"nav\">\n    <li class=\"tab1 on\">\n      <a href=\"/\">\n        <span class=\"emp_nav\">\n          <span>Home</span>\n        </span>\n      </a>\n    </li>\n    <li class=\"tab2 off\">\n      <a href=\"/en/myworkspace-j/\" rel=\"nofollow\">\n        <span class=\"emp_nav\"><span>Dashboard</span>\n      </span>\n    </a>\n    <ul class=\"sub-nav\">\n      <li class=\"off\">\n        <a href=\"/en/myworkspace-j/\" rel=\"nofollow\"><span class=\"emp_nav\"><span>Dashboard</span>\n        </span></a>\n      </li>\n      <li class=\"pos-rel off\"><a href=\"/en/mymailbox-j/\" rel=\"nofollow\"><span class=\"emp_nav\"><span>Mailbox </span>\n      </span>\n    </a>\n  </li>\n  <li class=\"off\"><a href=\"/en/my-applications/\" rel=\"nofollow\"><span class=\"emp_nav\">\n    <span>My Applications</span></span></a>\n  </li>\n  <li class=\"off\"><a href=\"/en/interviewing-pending-invitations-j/\" rel=\"nofollow\"><span class=\"emp_nav\"><span>Interview Invites</span></span></a>\n  </li>\n  <li class=\"off\"><a href=\"/en/account-js/?token=TYUIAS\" rel=\"nofollow\"><span class=\"emp_nav\"><span>My Account</span></span></a></li></ul></li><li class=\"tab3 off\"><a href=\"/en/international/job-search/\"><span class=\"emp_nav\"><span>Search Jobs</span></span></a><ul class=\"sub-nav\"><li class=\"off\"><a href=\"/en/international/job-search/\"><span class=\"emp_nav\"><span>Search Jobs</span></span></a></li><li class=\"off\"><a href=\"/en/job-search-advanced/\"><span class=\"emp_nav\"><span>Advanced Search</span></span></a></li><li class=\"off\"><a href=\"/en/mysearches-j/\" rel=\"nofollow\"><span class=\"emp_nav\"><span>Saved Searches</span></span></a>\n  </li>\n  <li class=\"off\"><a href=\"/en/myjobs/\" rel=\"nofollow\"><span class=\"emp_nav\"><span>My Saved Jobs</span></span></a></li></ul></li><li class=\"tab4 off\"><a href=\"/en/new-cv/\" rel=\"nofollow\"><span class=\"emp_nav\"><span>Post Your CV</span></span></a><ul class=\"sub-nav\"><li class=\"off\"><a href=\"/en/mycvs/\" rel=\"nofollow\"><span class=\"emp_nav\"><span>My CV</span></span></a>\n  </li>\n</ul>\n</li>\n</ul>\n\n</nav>\n</div>\n</div>\n</header>\n\n\n\n<div id=\"content-frame-wrapper\" class=\"pngfix\">\n\t<div id=\"content-frame\">\n\t\t\n\n\t\t\t<div id=\"content\">\n\n\n\n\n\n<div class='block-middle-wide intro_text_home_mod pos-rel home-banner'>\n<div class='block-middle-body banner-content'>\n\n<div class=\"login-box l bg_white phone_hide\">\n\t<p class=\"login-header bg_white bold\">LOGIN</p>\n\t<div class=\"padding-20\">\n\t\t<form name=\"\" action=\"/app/control/byt_reg_manager\" method=\"post\">\n\t\t\t<p class=\"margin-reset  margin_bottom_20  margin_top_30 font-m l grid-10\" id=\"user-input\">\n\t\t\t\t<input type=\"text\" name=\"loginUsername\" placeholder=\"Email Address\" class=\"grid-10\" onblur=\"returnText(this, 'mute');\" onfocus=\"clearText(this, 'mute');\" />\n\t\t\t</p>\n\t\t\t<p class=\"margin-reset font-m grid-10\" id=\"user-input\">\n\t\t\t\t<input type=\"password\" name=\"loginPassword\" class=\"grid-10\" autocomplete=\"off\" placeholder=\"Password\" onblur=\"returnText(this, 'mute');\" onfocus=\"clearText(this, 'mute');\" />\n\t\t\t\t<input type=\"hidden\" value=\"10\" name=\"byt_reg_stage\" >\n\t\t\t\t<input type=\"hidden\" value=\"home\" name=\"home\" >\n\t\t\t</p>\n\t\t\t<br>\n\t\t\t<button type=\"submit\" class=\"login-button margin-reset margin_r_10 uppercase padding-sep\"><b>Log In</b></button>\n\t\t\t<a class=\"login-button margin-reset margin_l_10 padding-sep r c line_height_20 padding_top_10 font-14\" href=\"/en/register-j/\"><b>REGISTER</b></a>\n\t\t\t<p class=\"c margin-reset margin_top_10\">\n\t\t\t\t<a class=\" c forgot-pass font-16 arkad-gray-t underline\" href=\"/en/forgot-userinfo/\">Forgot your password?</a><span class=\"tWhite\"> · </span>\n\t\t\t</p>\n\t\t</form>\n\t</div>\n</div>\n\n\n<div class=\"l margin_l_35 home-header padding-reset-p margin-reset-p grid-p-10\">\n<h1 class=\"arkad-green font-xxxxxl text-p-c font-p-xl\">ARKAD, WE ARE<br>STRUCTURED FOR SUCCESS</h1>\n</div>\n\n</div>\n</div>\n\n<div class=\"block-middle-wide home-content margin_top_5 margin_bottom_30\">\n\t<div class=\"block-middle-body overflow-h padding-reset\">\n\t\t<div class=\"margin_bottom_30\">\n\t\t\t<h2 class=\"font-29 margin_bottom_30 c\">WELCOME TO ARKAD</h2>\n\t\t\t<p class=\"line_height_25\">At Arkad we believe that dedication, continuous development and team work creates a road map to success. We encourage ambition and innovation, in order to reach our goals we believe in professionalism, team motivation and open communication.</p>\n\t\t</div>\n\t\t<div>\n\t\t\t<h2 class=\"font-29 margin_bottom_30 c\">WHY ARKAD</h2>\n\t\t\t<p class=\"line_height_25\">Arkad seeks people who are driven to ﬁnd cleaner, smarter ways to power the world. People like you. Turn your ideas into solutions. Discover all the places you can work, all the diverse people you can collaborate with. We invite you to explore it all.</p>\n\t\t</div>\n\t</div>\n</div>\n\n<div class='block-middle-wide latest_jobs_home_mod'><div class='overflow-v padding-reset block-middle-body padding_top_10'>\n\n\t\t<div class=\"grid-10\">\n\t\t\t<h2 class=\"font-29 l margin_l_10 padding_bottom_20 uppercase\" >Latest jobs</h2>\n\t\n\t\t\t<p class=\"r padding_top_5 margin-reset\">\n\t\t\t\t<a class=\"font-12 bold margin_r_10 arkad-green uppercase\" href=\"/en/job-search-results/\">VIEW ALL JOBS<span class=\"arkad-green i-right-arrow margin_l_5 font-12 vert_algn_mid\"></span></a>\n\t\t\t</p>\n\t\t\t</div>\n\t\t\n\t\t\t<br class=\"clear\"/>\n\t\t\t<div class=\"latest_jobs_block grid-10 c-block grid-p-10\">\n\t\t\t\t<div class=\"arkad-latestjob-slider\">\n\t\t\t\t\t\n\t\t\t\t<div class=\"overflow-h margin_side_10 latest_job_row margin-reset-p l grid-10 grid-p-10\">\n\t\t\t\t\t<div class=\"l grid-10\">\n\t\t\t<p class=\"font-20 padding_bottom_5 margin_bottom_5\"><a class=\"font-18 bold arkad-gray-t capitalize\" href=\"/en/saudi-arabia/jobs/project-engineer-3749653/\">Project Engineer</a></p><p class='job_data_info  margin_bottom_10 arkad-job-desc'>\n\t\t\t\t\t<span class=\"grid-10 display-b tBlack font-16 normal line_height_20\">&amp;bull;To manage, direct and supervise all direct project functions, thus ensuring cost effective and efficient achievement o&#133;</span>\n\t\t\t\t</p>\n\t\t\t\n\t\t\t\t<p class='job_data_info  margin_bottom_10'>\n\t\t\t\t\t<span class=\"grid-10 display-b arkad-gray-l font-14 normal line_height_20\">JOB ROLE</span>\n\t\t\t\t\t<span class=\"font-16 tBlack\"></span>\n\t\t\t\t</p>\n\t\t\t\n\t\t\t\t<p class='job_data_info  margin_bottom_10'>\n\t\t\t\t\t<span class=\"grid-10 display-b arkad-gray-l font-14 normal line_height_20\">LOCATION</span>\n\t\t\t\t\t<span class=\"font-16 tBlack\">Saudi Arabia - Eastern Province</span>\n\t\t\t\t</p>\n\t\t\t\n\t\t\t\t<div class=\" grid-10 margin_top_25\"><a href=\"/en/job-application/?jb_id=3749653\" class=\"btn bold font-16 grid-10 c apply-btn arkad-gray-t uppercase\">Apply for this job</a></div>\n\t\t\t\t<br class=\"clear\" />\n\t\t\t\t\n\t\t\t\t</div>\n\t\t\t\t\t\n\t\t\t\n\t\t\t\t</div>\n\t\t\t\n\t\t\t\t<div class=\"overflow-h margin_side_10 latest_job_row margin-reset-p l grid-10 grid-p-10\">\n\t\t\t\t\t<div class=\"l grid-10\">\n\t\t\t<p class=\"font-20 padding_bottom_5 margin_bottom_5\"><a class=\"font-18 bold arkad-gray-t capitalize\" href=\"/en/saudi-arabia/jobs/project-manager-3801092/\">Project Manager</a></p><p class='job_data_info  margin_bottom_10 arkad-job-desc'>\n\t\t\t\t\t<span class=\"grid-10 display-b tBlack font-16 normal line_height_20\">&amp;bull;Co-ordinate all projects/sites activity with responsibility for the execution of the project in compliance with all co&#133;</span>\n\t\t\t\t</p>\n\t\t\t\n\t\t\t\t<p class='job_data_info  margin_bottom_10'>\n\t\t\t\t\t<span class=\"grid-10 display-b arkad-gray-l font-14 normal line_height_20\">JOB ROLE</span>\n\t\t\t\t\t<span class=\"font-16 tBlack\"></span>\n\t\t\t\t</p>\n\t\t\t\n\t\t\t\t<p class='job_data_info  margin_bottom_10'>\n\t\t\t\t\t<span class=\"grid-10 display-b arkad-gray-l font-14 normal line_height_20\">LOCATION</span>\n\t\t\t\t\t<span class=\"font-16 tBlack\">Saudi Arabia</span>\n\t\t\t\t</p>\n\t\t\t\n\t\t\t\t<div class=\" grid-10 margin_top_25\"><a href=\"/en/job-application/?jb_id=3801092\" class=\"btn bold font-16 grid-10 c apply-btn arkad-gray-t uppercase\">Apply for this job</a></div>\n\t\t\t\t<br class=\"clear\" />\n\t\t\t\t\n\t\t\t\t</div>\n\t\t\t\t\t\n\t\t\t\n\t\t\t\t</div>\n\t\t\t\n\t\t\t\t<div class=\"overflow-h margin_side_10 latest_job_row margin-reset-p l grid-10 grid-p-10\">\n\t\t\t\t\t<div class=\"l grid-10\">\n\t\t\t<p class=\"font-20 padding_bottom_5 margin_bottom_5\"><a class=\"font-18 bold arkad-gray-t capitalize\" href=\"/en/saudi-arabia/jobs/project-manager-3801090/\">Project Manager</a></p><p class='job_data_info  margin_bottom_10 arkad-job-desc'>\n\t\t\t\t\t<span class=\"grid-10 display-b tBlack font-16 normal line_height_20\">&amp;bull;Co-ordinate all projects/sites activity with responsibility for the execution of the project in compliance with all co&#133;</span>\n\t\t\t\t</p>\n\t\t\t\n\t\t\t\t<p class='job_data_info  margin_bottom_10'>\n\t\t\t\t\t<span class=\"grid-10 display-b arkad-gray-l font-14 normal line_height_20\">JOB ROLE</span>\n\t\t\t\t\t<span class=\"font-16 tBlack\"></span>\n\t\t\t\t</p>\n\t\t\t\n\t\t\t\t<p class='job_data_info  margin_bottom_10'>\n\t\t\t\t\t<span class=\"grid-10 display-b arkad-gray-l font-14 normal line_height_20\">LOCATION</span>\n\t\t\t\t\t<span class=\"font-16 tBlack\">Saudi Arabia</span>\n\t\t\t\t</p>\n\t\t\t\n\t\t\t\t<div class=\" grid-10 margin_top_25\"><a href=\"/en/job-application/?jb_id=3801090\" class=\"btn bold font-16 grid-10 c apply-btn arkad-gray-t uppercase\">Apply for this job</a></div>\n\t\t\t\t<br class=\"clear\" />\n\t\t\t\t\n\t\t\t\t</div>\n\t\t\t\t\t\n\t\t\t\n\t\t\t\t</div>\n\t\t\t\n\t\t\t\t<div class=\"overflow-h margin_side_10 latest_job_row margin-reset-p l grid-10 grid-p-10\">\n\t\t\t\t\t<div class=\"l grid-10\">\n\t\t\t<p class=\"font-20 padding_bottom_5 margin_bottom_5\"><a class=\"font-18 bold arkad-gray-t capitalize\" href=\"/en/saudi-arabia/jobs/instrumentation-engineer-3800460/\">Instrumentation Engineer</a></p><p class='job_data_info  margin_bottom_10 arkad-job-desc'>\n\t\t\t\t\t<span class=\"grid-10 display-b tBlack font-16 normal line_height_20\">&amp;bull;Provide analysis on electrical and instruments specifications, survey reports, client&rsquo;s design appraisal, bluepr&#133;</span>\n\t\t\t\t</p>\n\t\t\t\n\t\t\t\t<p class='job_data_info  margin_bottom_10'>\n\t\t\t\t\t<span class=\"grid-10 display-b arkad-gray-l font-14 normal line_height_20\">JOB ROLE</span>\n\t\t\t\t\t<span class=\"font-16 tBlack\"></span>\n\t\t\t\t</p>\n\t\t\t\n\t\t\t\t<p class='job_data_info  margin_bottom_10'>\n\t\t\t\t\t<span class=\"grid-10 display-b arkad-gray-l font-14 normal line_height_20\">LOCATION</span>\n\t\t\t\t\t<span class=\"font-16 tBlack\">Saudi Arabia - Khobar</span>\n\t\t\t\t</p>\n\t\t\t\n\t\t\t\t<div class=\" grid-10 margin_top_25\"><a href=\"/en/job-application/?jb_id=3800460\" class=\"btn bold font-16 grid-10 c apply-btn arkad-gray-t uppercase\">Apply for this job</a></div>\n\t\t\t\t<br class=\"clear\" />\n\t\t\t\t\n\t\t\t\t</div>\n\t\t\t\t\t\n\t\t\t\n\t\t\t\t</div>\n\t\t\t\n\t\t\t\t<div class=\"overflow-h margin_side_10 latest_job_row margin-reset-p l grid-10 grid-p-10\">\n\t\t\t\t\t<div class=\"l grid-10\">\n\t\t\t<p class=\"font-20 padding_bottom_5 margin_bottom_5\"><a class=\"font-18 bold arkad-gray-t capitalize\" href=\"/en/saudi-arabia/jobs/sr-internal-auditor-3781410/\">Sr. Internal Auditor</a></p><p class='job_data_info  margin_bottom_10 arkad-job-desc'>\n\t\t\t\t\t<span class=\"grid-10 display-b tBlack font-16 normal line_height_20\">Primary Duties and Responsibilities:\nFollowing the approved audit program\nMay be involved in planning phas&#133;</span>\n\t\t\t\t</p>\n\t\t\t\n\t\t\t\t<p class='job_data_info  margin_bottom_10'>\n\t\t\t\t\t<span class=\"grid-10 display-b arkad-gray-l font-14 normal line_height_20\">JOB ROLE</span>\n\t\t\t\t\t<span class=\"font-16 tBlack\"></span>\n\t\t\t\t</p>\n\t\t\t\n\t\t\t\t<p class='job_data_info  margin_bottom_10'>\n\t\t\t\t\t<span class=\"grid-10 display-b arkad-gray-l font-14 normal line_height_20\">LOCATION</span>\n\t\t\t\t\t<span class=\"font-16 tBlack\">Saudi Arabia - Khobar</span>\n\t\t\t\t</p>\n\t\t\t\n\t\t\t\t<div class=\" grid-10 margin_top_25\"><a href=\"/en/job-application/?jb_id=3781410\" class=\"btn bold font-16 grid-10 c apply-btn arkad-gray-t uppercase\">Apply for this job</a></div>\n\t\t\t\t<br class=\"clear\" />\n\t\t\t\t\n\t\t\t\t</div>\n\t\t\t\t\t\n\t\t\t\n\t\t\t\t</div>\n\t\t\t\n\t\t\t\t</div>\n\t\t\t</div>\n\t\n</div></div>\n\n\t<div class=\"block-middle-wide action_box_home_mod border-reset\">\n\t\t<div class=\"block-middle-body overflow-h padding-reset\">\n\t\t\t<div class=\"fancy_ab l one margin-reset-p\">\n\t\t\t\t<p class=\"margin_bottom_10 ab_circle text-p-c\"><a class=\"font-l\" href=\"/en/cvb/\"><i class=\"i-ab_post font-xxl arkad-gray-t\"></i></a></p>\n\t\t\t\t<strong class=\"margin_bottom_10 padding_bottom_10 grid-75 c-block text-p-c\"><a href=\"/en/cvb/\" class=\"bold underline-none font-20 normal tBlack\">Submit a CV</a></strong>\n\t\t\t\t<p class=\"grid-75 c-block tBlack arkad-text-ab\"><a href=\"/en/cvb/\" class=\"underline-none arkad-gray-t font-16 line_height_20\">Interested in a career with us? Submit a CV now</a></p>\n\t\t\t\t<p class=\"grid-75 c-block text-r\"><a href=\"/en/cvb/\" class=\"hexagon inline-b\"></a></p>\n\t\t\t</div>\n\t\t\t<div class=\"fancy_ab l two margin_side_20 margin-reset-p\">\n\t\t\t\t<p class=\"margin_bottom_10 ab_circle text-p-c\"><a class=\"font-l\" href=\"/en/job-search/\"><i class=\"i-ab_search font-xxl arkad-gray-t\"></i></a></p>\n\t\t\t\t<strong class=\"margin_bottom_10 padding_bottom_10 grid-75 c-block text-p-c\"><a href=\"/en/job-search/\" class=\"bold underline-none font-20 normal tBlack\">Search Jobs</a></strong>\n\t\t\t\t<p class=\"grid-75 c-block  tBlack arkad-text-ab\"><a href=\"/en/job-search/\" class=\"underline-none arkad-gray-t font-16 line_height_20\">Find the perfect opening and apply with a click</a></p>\n\t\t\t\t<p class=\"grid-75 c-block text-r\"><a href=\"/en/job-search/\" class=\"hexagon inline-b\"></a></p>\n\t\t\t</div>\n\t\t\t<div class=\"fancy_ab l three\">\n\t\t\t\t<p class=\"margin_bottom_10 ab_circle text-p-c\"><a class=\"font-l\" href=\"/en/myworkspace-j/\"><i class=\"i-ab_dashboard font-xxl arkad-gray-t\"></i></a></p>\n\t\t\t\t<strong class=\"margin_bottom_10 padding_bottom_10 grid-75 c-block text-p-c\"><a href=\"/en/myworkspace-j/\" class=\" bold underline-none font-20 normal tBlack\">My Dashboard</a></strong>\n\t\t\t\t<p class=\"grid-75 c-block arkad-text-ab\"><a href=\"/en/myworkspace-j/\" class=\"underline-none arkad-gray-t font-16 line_height_20\">Manage your Career hunt by keeping your CVs updated and tracking your applications</a></p>\n\t\t\t\t<p class=\"grid-75 c-block text-r\"><a href=\"/en/myworkspace-j/\" class=\"hexagon inline-b\"></a></p>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n\n\n\n</div>\n\n\n\n\n<br class=\"clear\" />\n</div></div>\n\n<hr />\n\n<footer id=\"footer-wrapper\" class=\"pngfix\">\n\n\n<div id=\"footer\">\n\n<p class=\"l grid-p-10 text-p-c grid-3\">Copyright © 2018 Arkad. All rights reserved.</p>\n\n\t<div class=\"grid-th l c grid-p-10 text-p-c margin_bottom_10\">\n\t\t<p class=\"social-links-footer margin-reset line_height_20 c float_none_p grid-p-10 text-p-c margin_top_5\">\n\t\t\t<a href=\"https://twitter.com/arkad_ec\" target=\"_blank\" class=\"margin_side_5\"><i class=\"i-twitter-icon tWhite font-l\"></i></a>\n\t\t\t<a href=\"https://www.linkedin.com/company-beta/4866806/\" target=\"_blank\" class=\"margin_side_5\"><i class=\"i-linkedin-icon tWhite font-l\"></i></a>\n\t\t</p>\n\t</div>\n\n\n\t<p class=\"r grid-p-10 text-p-c grid-th text-r\">\n\t\n\t\n\n\t\t<span class=\"powered_by_box_js inline-b\">\n    \t\t<a href=\"https://www.talentera.com\" class=\"pbb\">\n    \t\t\t<img src=\"https://img0bm.b8cdn.com/images/templates/default/powered-by-talentera-badge-js.png\" alt=\"Find jobs in Dubai, UAE, Saudi Arabia, Qatar, Kuwait\" title=\"Powered by Talentera.com - Talent Acquisition, Applicant Tracking & Recruitment Software\" class=\"pngfix\" />\n    \t\t</a>\n\t\t\t<span class=\"powered_by_box_js_sper vert_algn_mid\">a Product of <a href=\"https://www.bayt.com/\" class=\"byt_blue_color underline-none\">Bayt.com</a></span>\n\t\t</span>\n\t\n\t</p>\n\n\n\n<br class=\"clear\" />\n</div>\n\n</footer>\n</div>\n</div>"

/***/ }),

/***/ "./src/app/carrers/carrers.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CarrersComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var CarrersComponent = /** @class */ (function () {
    function CarrersComponent() {
    }
    CarrersComponent.prototype.ngOnInit = function () {
        $.getScript('assets/js/vamsi.js');
    };
    CarrersComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-carrers',
            template: __webpack_require__("./src/app/carrers/carrers.component.html"),
            styles: [__webpack_require__("./src/app/carrers/carrers.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], CarrersComponent);
    return CarrersComponent;
}());



/***/ }),

/***/ "./src/app/construction-services/construction-services.component.css":
/***/ (function(module, exports) {

module.exports = "\n\n\n.row.stats.stats-2,\n.sidebar-blog-categories ul,\n.sidebar-categories ul {\n    background: #f4f5f8\n}\n\n\n.sidebar-blog-categories ul li a,\n.sidebar-categories ul li a {\n    font-size: 17px;\n    color: #61656f;\n    padding: 24px 30px;\n    display: block;\n    line-height: 1;\n    border-bottom: 1px solid #fcfcfd\n}\n\n\n.sidebar-blog-categories ul li a.active,\n.sidebar-categories ul li a.active {\n    color: #fff;\n    background: #a6ce39\n}\n\n\n.sidebar-categories ul li a:hover {\n    background: #e9e9e9\n}\n\n\n.sidebar>div {\n    margin-bottom: 45px\n}\n\n\n.sidebar>div:last-child,\ndiv.process-bar>.skillbar:last-child {\n    margin-bottom: 0\n}\n\n\nsection.services-checmicals {\n    padding: 0;\n}\n\n\nh4.subtitle {\n    line-height: 1.4;\n    margin: 0 0 10px;\n    font-size: 20px;\n    color: #a6ce39;\n}\n\n\n.service ul li {\n    font-size: 16px;\n    color: #677078;\n    padding: 5px 0 5px 30px;\n    position: relative;\n    font-family: 'aktiv_groteskregular', Arial, sans-serif\n}\n\n\n.service ul li:last-child {\n    border-bottom: 0;\n    margin-bottom: 10px\n}\n\n\n.service ul li i.fa {\n    color: #455253;\n    padding-right: 15px;\n    font-size: 17px;\n    position: absolute;\n    line-height: 30px;\n    left: 0\n}"

/***/ }),

/***/ "./src/app/construction-services/construction-services.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"wrapper\">\n  <app-header></app-header>\n<div class=\"container\">\n    <div class=\"row services-sidebar\">\n\n        <div class=\"col-md-3 sidebar left hidden-sm hidden-xs\">\n            <div class=\"sidebar-blog-categories\">\n<ul>\n<li> <a href=\"service-construction.php\"   class=\"active\"> Construction Services </a> </li>\n<li> <a href=\"service-project-managment.php\"    class=\"\"> Project Management </a> </li>\n<li> <a href=\"services-engineering.php\"    class=\"\"> Engineering Services </a> </li>\n<li> <a href=\"services-research.php\"    class=\"\"> Research & Development </a> </li>\n</ul>\n</div>\n    </div>\n\n        <div class=\"col-md-9 services-content\">\n            <div class=\"spacer-40\"></div>\n            <section class=\"services-checmicals service\">\n                <div>\n                    <h4 class=\"chemicals-subtitle subtitle\"> We provide professional services offered by our team of experts which are classified under the following five broad divisions:</h4>\n                    <div class=\"col-sm-12\">\n                      <ol id=\"numbers\">\n                        <li>Oil and gas upstream support. engineering and construction services.</li>\n                        <li>Petrochemical upstram support, engineering and construction services.</li>\n                        <li>Nuclear engineering and construction services.</li>\n                        <li>Mining logistics, engineering and construction services.</li>\n                        <li>Renewable engergy technologies, support, engineering and construction services.</li>\n                      </ol>\n                    </div>\n                    <div class=\"spacer-40\"></div>\n                    <h4 class=\"company-subtitle subtitle\">Construction Services:</h4>\n                    <div class=\"col-sm-6\">\n                      <ul>\n                          <li><i class=\"fa fa-dot-circle-o\" aria-hidden=\"true\"></i>Detailed Engineering and Designing.</li>\n                          <li><i class=\"fa fa-dot-circle-o\" aria-hidden=\"true\"></i>Procurement and Logistics.</li>\n                          <li><i class=\"fa fa-dot-circle-o\" aria-hidden=\"true\"></i>Major and Minor Capex Project Construction.</li>\n                          <li><i class=\"fa fa-dot-circle-o\" aria-hidden=\"true\"></i>Fabrication and specific design and builds.</li>\n                          <li><i class=\"fa fa-dot-circle-o\" aria-hidden=\"true\"></i>Testing and Commissioning Services. </li>\n                          <li><i class=\"fa fa-dot-circle-o\" aria-hidden=\"true\"></i>Civil engineering woorks </li>\n                          <li><i class=\"fa fa-dot-circle-o\" aria-hidden=\"true\"></i>Geotechnical services</li>\n                          <li><i class=\"fa fa-dot-circle-o\" aria-hidden=\"true\"></i>GIS and mapping services </li>\n                          <li><i class=\"fa fa-dot-circle-o\" aria-hidden=\"true\"></i>Identifying and disruptive technology and R&D to enhance traditional value chain works communication.</li>\n                        </ul>\n                      </div>\n                      <div class=\"col-sm-6\">\n                        <ul>\n                          <li><i class=\"fa fa-dot-circle-o\" aria-hidden=\"true\"></i>Pipeline construction projects </li>\n                          <li><i class=\"fa fa-dot-circle-o\" aria-hidden=\"true\"></i>Leak Detection System.</li>\n                          <li><i class=\"fa fa-dot-circle-o\" aria-hidden=\"true\"></i>Cathodic Protection. </li>\n                          <li><i class=\"fa fa-dot-circle-o\" aria-hidden=\"true\"></i>Metering and Filtration Installations. </li>\n                          <li><i class=\"fa fa-dot-circle-o\" aria-hidden=\"true\"></i>Electrical and Instrumentation. </li>\n                          <li><i class=\"fa fa-dot-circle-o\" aria-hidden=\"true\"></i>Maintenance. </li>\n                          <li><i class=\"fa fa-dot-circle-o\" aria-hidden=\"true\"></i>Pre-commissioning and Commissioning Assistance. </li>\n                      </ul>\n                    </div>\n                </div>\n            </section>\n\n            <div class=\"spacer-80\"> </div>\n\n        </div>\n\n        \n\n    </div>\n</div>\n\n</div>\n<app-footer></app-footer>"

/***/ }),

/***/ "./src/app/construction-services/construction-services.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ConstructionServicesComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ConstructionServicesComponent = /** @class */ (function () {
    function ConstructionServicesComponent() {
    }
    ConstructionServicesComponent.prototype.ngOnInit = function () {
    };
    ConstructionServicesComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-construction-services',
            template: __webpack_require__("./src/app/construction-services/construction-services.component.html"),
            styles: [__webpack_require__("./src/app/construction-services/construction-services.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ConstructionServicesComponent);
    return ConstructionServicesComponent;
}());



/***/ }),

/***/ "./src/app/corporate-governance/corporate-governance.component.css":
/***/ (function(module, exports) {

module.exports = ".heading {\n    color: #a6ce39;\n    font-size: 20px;\n}\n\n.about-content{\n    padding-bottom: 40px;\n}\n\n.row.stats.stats-2,\n.sidebar-blog-categories ul,\n.sidebar-categories ul {\n    background: #f4f5f8\n}\n\n.sidebar-blog-categories ul li a,\n.sidebar-categories ul li a {\n    font-size: 17px;\n    color: #61656f;\n    padding: 24px 30px;\n    display: block;\n    line-height: 1;\n    border-bottom: 1px solid #fcfcfd\n}\n\n.sidebar-blog-categories ul li a.active,\n.sidebar-categories ul li a.active {\n    color: #fff;\n    background: #a6ce39\n}\n\n.sidebar-categories ul li a:hover {\n    background: #e9e9e9\n}\n\n.sidebar>div {\n    margin-bottom: 45px\n}\n\n.sidebar>div:last-child,\ndiv.process-bar>.skillbar:last-child {\n    margin-bottom: 0\n}\n\n\n"

/***/ }),

/***/ "./src/app/corporate-governance/corporate-governance.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"wrapper\">\n<app-header></app-header>\n<div class=\"container\">\n\n    <div class=\"row about-sidebar\">\n\n        <div class=\"col-md-3 sidebar left hidden-sm hidden-xs\">\n            <div class=\"sidebar-blog-categories\">\n<ul>\n<li> <a href=\"who_are_we.php\"                     class=\"\"> About Arkad </a> </li>\n<li> <a href=\"where_are_we_going.php\"             class=\"\"> Strategic Vision </a> </li>\n<li> <a href=\"arkad_value.php\"                  class=\"\"> Arkad Values </a> </li>\n<li> <a href=\"corporate_governance.php\"         class=\"active\"> Corporate Governance </a> </li>\n\n\n</ul>\n</div>\n    </div>\n\n        <div class=\"col-md-9 about-content\">\n            <section class=\"about-culture\">\n                <div class=\"row culture\">\n                    <div class=\"col-sm-12 cul\">\n                      <!-- <h2 class=\"culture-title subtitle\"> Corporate Governance </h2> -->\n                      <p class=\"heading\">Introduction </p>\n                      <p>ARKAD Engineering & Construction Co. (ARKAD) is fully committed to ensuring that the highest standards of corporate governance are observed throughout ARKAD; so that its affairs are conducted with integrity, honesty, transparency and professionalism.</p>\n                      <p>The ARKAD divisions, operate with the same ethical principles, values, and corporate governance standards.</p>\n\n                      <p class=\"heading\">Corporate Governance Guidelines </p>\n                      <p>The Board of Executive committee has established Corporate Governance Guidelines which provide a framework for the effective governance of the Company. The guidelines refer to the set of systems, principles, practices and processes by which ARKAD is governed. ARKAD strongly believes that a robust governance framework, based on best practices, can contribute to the success and long-term sustainability of ARKAD businesses, as well as to the economic stability, growth and job creation.</p>\n\n                      <p class=\"heading\">Oversight and Supervising: </p>\n\n                      <div class=\"col-sm-12\">\n                        <p class=\"heading\">Executive Committee</p>\n                        <p>This committee supports the CEO and engages in decision making providing organizational direction on behalf of the board and advising the board on decisions and business matters ranging from strategy planning, policy, investment and risk and recommendation for Future Board Consideration.</p>\n\n                        <p class=\"heading\">Audit Committee</p>\n                        <p>This committee is responsible for oversight of internal and external audits activities, accounting policies, financial reporting, risk management and internal control processes</p>\n\n                        <p class=\"heading\">Board Steering Committee</p>\n                        <p>This committee is responsible for oversight and review of business performance of the company, providing recommendation on compliance with ARKAD policies, and reporting financial and non-financial information.</p>\n                    </div>\n                    </div>\n                </div>\n            </section>\n        </div>\n\n        \n    </div>\n\n</div>\n</div>\n<app-footer></app-footer>\n"

/***/ }),

/***/ "./src/app/corporate-governance/corporate-governance.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CorporateGovernanceComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var CorporateGovernanceComponent = /** @class */ (function () {
    function CorporateGovernanceComponent() {
    }
    CorporateGovernanceComponent.prototype.ngOnInit = function () {
    };
    CorporateGovernanceComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-corporate-governance',
            template: __webpack_require__("./src/app/corporate-governance/corporate-governance.component.html"),
            styles: [__webpack_require__("./src/app/corporate-governance/corporate-governance.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], CorporateGovernanceComponent);
    return CorporateGovernanceComponent;
}());



/***/ }),

/***/ "./src/app/engineering-services/engineering-services.component.css":
/***/ (function(module, exports) {

module.exports = "\n.row.stats.stats-2,\n.sidebar-blog-categories ul,\n.sidebar-categories ul {\n    background: #f4f5f8\n}\n\n\n.sidebar-blog-categories ul li a,\n.sidebar-categories ul li a {\n    font-size: 17px;\n    color: #61656f;\n    padding: 24px 30px;\n    display: block;\n    line-height: 1;\n    border-bottom: 1px solid #fcfcfd\n}\n\n\n.sidebar-blog-categories ul li a.active,\n.sidebar-categories ul li a.active {\n    color: #fff;\n    background: #a6ce39\n}\n\n\n.sidebar-categories ul li a:hover {\n    background: #e9e9e9\n}\n\n\n.sidebar>div {\n    margin-bottom: 45px\n}\n\n\n.sidebar>div:last-child,\ndiv.process-bar>.skillbar:last-child {\n    margin-bottom: 0\n}\n\n\n"

/***/ }),

/***/ "./src/app/engineering-services/engineering-services.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"wrapper\">\n<app-header></app-header>\n<div class=\"container\">\n    <div class=\"row\">\n\n        <div class=\"col-md-3 sidebar left hidden-sm hidden-xs\">\n            <div class=\"sidebar-blog-categories\">\n<ul>\n<li> <a href=\"service-construction.php\"   class=\"\"> Construction Services </a> </li>\n<li> <a href=\"service-project-managment.php\"    class=\"\"> Project Management </a> </li>\n<li> <a href=\"services-engineering.php\"    class=\"active\"> Engineering Services </a> </li>\n<li> <a href=\"services-research.php\"    class=\"\"> Research & Development </a> </li>\n</ul>\n</div>\n    </div>\n\n        <div class=\"col-md-9 services-content\">\n          <section class=\"sustainability\" >\n            <!-- <h4 class=\"chemicals-subtitle subtitle\">Engineering Services </h4> -->\n            <p>Arkad Engineering and Construction company is a multi-disciplinary engineering company which provides services to the international energy sectors. We operate across all aspects of multiple energy sector discipline value chains, from initial feasibility and market studies to the development, construction and operation of assets, full project /opportunity Lifecyle stages from concept selection to handover commissioning services.</p>\n            <p>As owner's engineer, we can develop tender specifications and evaluate bids for major energy projects and also offer a full range of strategic, regulatory and environmental consultancy services.</p>\n        </section>\n        </div>\n\n        \n\n    </div>\n</div>\n</div>\n<app-footer></app-footer>"

/***/ }),

/***/ "./src/app/engineering-services/engineering-services.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EngineeringServicesComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var EngineeringServicesComponent = /** @class */ (function () {
    function EngineeringServicesComponent() {
    }
    EngineeringServicesComponent.prototype.ngOnInit = function () {
    };
    EngineeringServicesComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-engineering-services',
            template: __webpack_require__("./src/app/engineering-services/engineering-services.component.html"),
            styles: [__webpack_require__("./src/app/engineering-services/engineering-services.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], EngineeringServicesComponent);
    return EngineeringServicesComponent;
}());



/***/ }),

/***/ "./src/app/footer/footer.component.css":
/***/ (function(module, exports) {

module.exports = "footer .copyright {\n    padding: 30px 0;\n    background: #a6ce39;\n}\n.copyright-bar p {\n    font-size: 16px;\n    color: #353535;\n    line-height: 1.5;\n    margin-bottom: 0;\n}"

/***/ }),

/***/ "./src/app/footer/footer.component.html":
/***/ (function(module, exports) {

module.exports = "<footer>\n<!-- Copyright -->\n<div class=\"copyright\">\n  <div class=\"container\">\n      <div class=\"row copyright-bar\">\n          <div class=\"col-md-6\"><p>Copyright © 2018 Arkad Co. All Rights Reserved.</p></div>\n          <div class=\"col-md-6\"><p class=\"pull-right\"><a href=\"https://validator.w3.org/check?uri=referer\"><img src=\"http://www.w3.org/Icons/valid-xhtml10\" alt=\"Valid XHTML 1.0!\" height=\"31\" width=\"88\" /></a> </p></div>\n      </div>\n  </div>\n</div>\n<!-- Copyright -->\n</footer>"

/***/ }),

/***/ "./src/app/footer/footer.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FooterComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FooterComponent = /** @class */ (function () {
    function FooterComponent() {
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    FooterComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-footer',
            template: __webpack_require__("./src/app/footer/footer.component.html"),
            styles: [__webpack_require__("./src/app/footer/footer.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "./src/app/header/header.component.css":
/***/ (function(module, exports) {

module.exports = ".header-area {\n    background: none;\n    position: relative!important;\n    width: 100%;\n}\n.email {\n    margin-top: 27px\n}\n.logo-top-info {\n    padding: 25px 0\n}\n.row.links>div+div,\n.top-info {\n    width: auto\n}\n.social,\n.top-info {\n    float: left\n}\n.top-info h3 {\n    font-size: 15px;\n    color: #a6ce39;\n    font-weight: 700;\n    line-height: 1.2;\n    margin-top: 0\n}\n.top-info p {\n    margin-bottom: 0;\n    font-size: 15px;\n    color: #76797f;\n    line-height: 1.4\n}\np#boldunerline {\n    text-decoration: underline\n}\n.bold,\n.heading,\n.top-info p,\np#boldunerline {\n    font-family: 'aktiv_groteskbold'\n}\n.heading {\n    color: #a6ce39;\n    font-size: 20px\n}\n.top-info>div {\n    padding: 0 20px;\n    float: left\n}\n.top-info>div:last-child {\n    border: 0\n}\n.open-positions ul li:after,\n.top-info-social:after,\n.top-info:after {\n    content: \"\";\n    display: block;\n    clear: both\n}\nspan.forex {\n    font-size: 14px;\n    font-family: 'aktiv_groteskbold', Arial, sans-serif;\n    color: rgba(118, 121, 127, .6);\n    line-height: 1.571;\n    position: relative;\n    padding-left: 8px\n}\nspan.forex i {\n    font-size: 17px;\n    color: #35db24;\n    padding-right: 3px;\n    line-height: 1\n}\n.social ul.social-icons {\n    padding-left: 15px\n}\n.social ul.social-icons li {\n    display: inline-block\n}\n.social ul.social-icons li:last-child a {\n    margin: 0\n}\n.social ul.social-icons li a:hover {\n    background: #a6ce39\n}\n.social ul.social-icons li a,\nul.main-menu li a {\n    display: block;\n    -webkit-transition: .5s ease all;\n    transition: .5s ease all\n}\n.social ul.social-icons li a {\n    width: 52px;\n    height: 52px;\n    text-align: center;\n    background: rgba(166, 206, 57, .7);\n    border-radius: 50%;\n    margin-right: 15px;\n    font-size: 21px;\n    line-height: 52px;\n    color: #fff\n}\n.top-info-social {\n    margin-top: 5px\n}\n@media all and (max-width:1199px) {\n    .top-info>div {\n        padding: 0 16px\n    }\n    .social ul.social-icons li a {\n        margin-right: 10px\n    }\n}\n@media all and (max-width:991px) {\n    .logo-top-info {\n        padding: 25px 0 0\n    }\n    .logo {\n        text-align: left;\n        margin-bottom: 20px\n    }\n    .top-info-social {\n        display: none\n    }\n}\n@media all and (max-width:479px) {\n    .logo img {\n        width: 180px\n    }\n}\n.main-menu,\nfooter .footer {\n    padding: 0;\n    background: #f4f5f8\n}\nul.main-menu li a {\n    font-size: 15px;\n    font-family: 'aktiv_groteskbold', Arial, sans-serif;\n    color: #61656f;\n    font-weight: 700;\n    line-height: 1.467;\n    text-transform: uppercase;\n    padding: 20px 25px\n}\nul.main-menu li:last-child a {\n    padding-right: 0\n}\n.breadcrumbs a:hover,\nul.main-menu li a:hover,\nul.main-menu li.active>a {\n    color: #a6ce39\n}\nul.main-menu>li {\n    display: inline-block;\n    padding: 0;\n    position: relative\n}\nul.main-menu>li.dropdown ul {\n    visibility: hidden;\n    opacity: 0;\n    position: absolute;\n    top: 120%;\n    background: #fff;\n    min-width: 245px;\n    padding: 10px 0;\n    -webkit-transition: .5s ease all;\n    transition: .5s ease all;\n    z-index: 1000\n}\nul.main-menu>li.dropdown ul li a {\n    padding: 10px 20px;\n    display: block;\n    font-size: 16px;\n    font-weight: 400;\n    text-transform: none\n}\nul.main-menu>li.dropdown ul:before {\n    content: \"\";\n    display: block;\n    visibility: hidden;\n    opacity: 0;\n    position: absolute;\n    top: -20px!important;\n    left: 30px;\n    border: 10px solid transparent;\n    border-bottom-color: #fff;\n    -webkit-transition: 1s ease all;\n    transition: 1s ease all\n}\nul.main-menu>li.dropdown:hover ul,\nul.main-menu>li.dropdown:hover ul:before {\n    visibility: visible;\n    opacity: 1;\n    top: 100%\n}\ni.fa.dropdown-toggle {\n    display: none\n}\nli.dropdown i.fa.dropdown-toggle {\n    display: block;\n    position: relative;\n    top: 49%;\n    right: 5px;\n    -webkit-transform: translateY(-50%);\n    transform: translateY(-50%);\n    font-size: 12px;\n    line-height: 1;\n    color: #aaa;\n    cursor: pointer\n}\n@media all and (max-width:991px) {\n    nav.navbar-collapse {\n        position: absolute;\n        right: 0;\n        top: 75px;\n        width: 250px;\n        opacity: 0;\n        z-index: 1000;\n        height: auto!important;\n        -webkit-transition: .5s ease all;\n        transition: .5s ease all\n    }\n    .navbar-collapse.collapse {\n        display: none!important;\n        padding: 0;\n        overflow: inherit\n    }\n    .navbar-collapse.collapsing {\n        padding: 0\n    }\n    .navbar-collapse.collapse.in {\n        display: block!important;\n        opacity: 1;\n        right: 20px\n    }\n    .navbar-toggle {\n        display: block;\n        right: 0;\n        position: absolute;\n        background: 0 0;\n        top: 0;\n        border: 0;\n        padding: 0 10px;\n        margin: 21px 15px\n    }\n    .navbar-toggle span.icon-bar {\n        background: #61656f;\n        height: 3px\n    }\n    ul.main-menu>li {\n        display: block\n    }\n    ul.main-menu {\n        padding: 10px 0\n    }\n    ul.main-menu>li>a {\n        padding: 15px 10px\n    }\n    ul.main-menu>li.dropdown ul {\n        left: -30px\n    }\n    ul.main-menu>li.dropdown:hover ul,\n    ul.main-menu>li.dropdown:hover ul:before {\n        visibility: hidden;\n        opacity: 0;\n        top: 100%\n    }\n    ul.main-menu>li.dropdown.open ul,\n    ul.main-menu>li.dropdown.open ul:before {\n        visibility: visible;\n        opacity: 1;\n        top: 100%\n    }\n    ul.main-menu>li.dropdown.open ul {\n        left: 0\n    }\n}\n/* .wrapper{\n position: relative;\n overflow: hidden;   \n min-height: 0;\n   \n} */\n\n"

/***/ }),

/***/ "./src/app/header/header.component.html":
/***/ (function(module, exports) {

module.exports = " <!-- Page Wrapper -->\n\n    <!-- Header Section -->\n    <header>\n<div class=\"header-area\">\n\n<!-- Top Contact Info -->\n<div class=\"row logo-top-info\">\n    <div class=\"container\">\n        <div class=\"col-md-3 logo\">\n            <!-- Main Logo -->\n            <a href=\"./\"><img src=\"assets/images/logo204x59.png\" alt=\"<?php echo WEB_TITLE; ?>\" /></a>\n            <!-- Responsive Toggle Menu -->\n            <button type=\"button\" class=\"navbar-toggle\" data-toggle=\"collapse\" data-target=\"#navbar\">\n                <span class=\"sr-only\"> Main Menu </span>\n                <span class=\"icon-bar\"></span>\n                <span class=\"icon-bar\"></span>\n                <span class=\"icon-bar\"></span>\n            </button>\n        </div>\n        <div class=\"col-md-9 top-info-social\">\n            <div class=\"pull-right\">\n                <div class=\"top-info\">\n                    <div class=\"call\">\n                        <h3> CONTACT US </h3>\n                        <p> <i class=\"fa fa-phone\" aria-hidden=\"true\"></i> +966 13 892 1400 </p>\n                    </div>\n                    <div class=\"email\">\n                        <p> <i class=\"fa fa-envelope\" aria-hidden=\"true\"></i> info@arkad.com </p>\n                    </div>\n                </div>\n                <div class=\"social\">\n                    <ul class=\"social-icons\">\n                        <li><a href=\"https://twitter.com/arkad_ec\" target=\"_blank\"><i class=\"fa fa-twitter\" aria-hidden=\"true\"></i></a></li>\n                        <li><a href=\"https://www.linkedin.com/company-beta/4866806/\" target=\"_blank\"><i class=\"fa fa-linkedin\" aria-hidden=\"true\"></i></a></li>\n                    </ul>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>\n\n<!-- Main Navigation Section -->\n<nav id=\"navbar\" class=\"collapse navbar-collapse main-menu\">\n    <div class=\"container\">\n        <ul class=\"main-menu\">\n            <li class=\"\">\n              <a [routerLink]=\"['/'] \"  > Home </a>\n\n            </li>\n            <li class=\"dropdown\">\n                <a href=\"who_are_we.php\"  data-toggle=\"dropdown\">Who We Are <i class=\"fa fa-chevron-down \"></i></a>\n                <ul>\n                        <li> <a [routerLink]=\"['/about-Arkad']\" >                      About Arkad </a> </li>\n                        <li> <a [routerLink]=\"['/strategic-vision']\">               Strategic Vision</a> </li>\n                        <li> <a [routerLink]=\"['/arkad-values']\">                       Arkad Values </a> </li>\n                        <li> <a [routerLink]=\"['/coporate-governance']\">             Corporate Governance</a></li>\n                </ul>\n            </li>\n            <li class=\"dropdown \">\n                <a href=\"#\" data-toggle=\"dropdown\"> What we do <i class=\"fa fa-chevron-down\"></i></a>\n                <ul>\n                        <li> <a [routerLink]=\"['/construction-services']\">        Construction Services </a> </li>\n                        <li> <a [routerLink]=\"['/project-management']\">   Project Management </a> </li>\n                        <li> <a [routerLink]=\"['/engineering-services']\">        Engineering Services </a> </li>\n                        <li> <a [routerLink]=\"['/research-developement']\">        Research & Development </a> </li>\n                </ul>\n            </li>\n            <li class=\"\"><a [routerLink]=\"['/sustainability']\"> Sustainability </a></li>\n            <li class=\"\"><a [routerLink]=\"['/projects']\"> Projects </a></li>\n            <li class=\"\"><a [routerLink]=\"['/news']\">     News </a></li>\n            <li><a [routerLink]=\"['/careers']\">   Careers </a></li>\n            <li class=\"\"><a href=\"contact.php\">  Contact </a></li>\n        </ul>\n    </div>\n</nav>\n\n</div>\n</header>\n    <!-- Header Section -->\n"

/***/ }),

/***/ "./src/app/header/header.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HeaderComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HeaderComponent = /** @class */ (function () {
    function HeaderComponent() {
    }
    HeaderComponent.prototype.ngOnInit = function () {
    };
    HeaderComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-header',
            template: __webpack_require__("./src/app/header/header.component.html"),
            styles: [__webpack_require__("./src/app/header/header.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "./src/app/homepage/homepage.component.css":
/***/ (function(module, exports) {

module.exports = "#home{\n    background-image: url(\"/assets/images/back10overlay.png\");\n    height: 100%; \n    width: 100%;\n    background-position: center;\n    background-repeat: no-repeat;\n    background-size: cover; \n    background-attachment: fixed;\n}\n.wrapper{\n    min-height: 0;\n}\n.top-info h3 {\n    font-size: 15px;\n    color: #a6ce39;\n    font-weight: 700;\n    line-height: 1.2;\n    margin-top: 0;\n}\n.logo {\n    padding: 25px 30px\n}\n.top-info p {\n    margin-bottom: 0;\n    font-size: 15px;\n    color: #76797f;\n    line-height: 1.4\n}\n.top-info p {\n    color: #fff;\n}\n.top-info>div {\n    padding: 0 20px;\n    float: left\n}\n.email {\n    margin-top: 27px\n}\n.top-info>div:last-child {\n    border: 0\n}\n.open-positions ul li:after,\n.top-info-social:after,\n.top-info:after {\n    content: \"\";\n    display: block;\n    clear: both\n}\n.social ul.social-icons {\n    padding-left: 15px\n}\n.social ul.social-icons li {\n    display: inline-block\n}\n.social ul.social-icons li:last-child a {\n    margin: 0\n}\n.social ul.social-icons li a:hover {\n    background: #a6ce39\n}\n.social ul.social-icons li a,\nul.main-menu li a {\n    display: block;\n    -webkit-transition: .5s ease all;\n    transition: .5s ease all\n}\n.social ul.social-icons li a {\n    width: 52px;\n    height: 52px;\n    text-align: center;\n    background: rgba(166, 206, 57, .7);\n    border-radius: 50%;\n    margin-right: 15px;\n    font-size: 21px;\n    line-height: 52px;\n    color: #fff\n}\n.top-info-social {\n    margin-top: 25px\n}\n.social, .top-info {\n    float: left;\n}\n@media all and (max-width:1199px) {\n    .top-info>div {\n        padding: 0 16px\n    }\n    .social ul.social-icons li a {\n        margin-right: 10px\n    }\n}\n@media all and (max-width:991px) {\n    .logo-top-info {\n        padding: 25px 0 0\n    }\n    .logo {\n        text-align: left;\n        margin-bottom: 20px\n    }\n    .top-info-social {\n        display: none\n    }\n}\n@media all and (max-width:479px) {\n    .logo img {\n        width: 180px\n    }\n}\n.main-menu,\nfooter .footer {\n    padding: 0;\n    background: #f4f5f8\n}\nul.main-menu li a {\n    font-size: 15px;\n    font-family: 'aktiv_groteskbold', Arial, sans-serif;\n    color: #61656f;\n    font-weight: 700;\n    line-height: 1.467;\n    text-transform: uppercase;\n    padding: 20px 25px\n}\nul.main-menu li:last-child a {\n    padding-right: 0\n}\n.breadcrumbs a:hover,\nul.main-menu li a:hover,\nul.main-menu li.active>a {\n    color: #a6ce39\n}\nul.main-menu>li {\n    display: inline-block;\n    padding: 0;\n    position: relative\n}\nul.main-menu>li.dropdown ul{\n    visibility: hidden;\n    opacity: 0;\n    position: absolute;\n    top: 120%;\n    background: #fff;\n    min-width: 245px;\n    padding: 10px 0;\n    -webkit-transition: .5s ease all;\n    transition: .5s ease all;\n    z-index: 1000\n}\nul.main-menu>li.dropdown ul li a {\n    padding: 10px 20px;\n    display: block;\n    font-size: 16px;\n    font-weight: 400;\n    text-transform: none\n}\nul.main-menu>li.dropdown ul:before {\n    content: \"\";\n    display: block;\n    visibility: hidden;\n    opacity: 0;\n    position: absolute;\n    top: -20px!important;\n    left: 30px;\n    border: 10px solid transparent;\n    border-bottom-color: #fff;\n    -webkit-transition: 1s ease all;\n    transition: 1s ease all\n}\nul.main-menu>li.dropdown:hover ul,\nul.main-menu>li.dropdown:hover ul:before {\n    visibility: visible;\n    opacity: 1;\n    top: 100%\n}\ni.fa.dropdown-toggle {\n    display: none\n}\nli.dropdown i.fa.dropdown-toggle {\n    display: block;\n    position: absolute;\n    top: 49%;\n    right: 5px;\n    -webkit-transform: translateY(-50%);\n    transform: translateY(-50%);\n    font-size: 12px;\n    line-height: 1;\n    color: #aaa;\n    cursor: pointer\n}\n@media all and (max-width:991px) {\n    nav.navbar-collapse {\n        position: absolute;\n        right: 0;\n        top: 75px;\n        width: 250px;\n        opacity: 0;\n        z-index: 1000;\n        height: auto!important;\n        -webkit-transition: .5s ease all;\n        transition: .5s ease all\n    }\n    .navbar-collapse.collapse {\n        display: none!important;\n        padding: 0;\n        overflow: inherit\n    }\n    .navbar-collapse.collapsing {\n        padding: 0\n    }\n    .navbar-collapse.collapse.in {\n        display: block!important;\n        opacity: 1;\n        right: 20px\n    }\n    .navbar-toggle {\n        display: block;\n        right: 0;\n        position: absolute;\n        background: 0 0;\n        top: 0;\n        border: 0;\n        padding: 0 10px;\n        margin: 21px 15px\n    }\n    .navbar-toggle span.icon-bar {\n        background: #61656f;\n        height: 3px\n    }\n    ul.main-menu>li {\n        display: block\n    }\n    ul.main-menu {\n        padding: 10px 0\n    }\n    ul.main-menu>li>a {\n        padding: 15px 10px\n    }\n    ul.main-menu>li.dropdown ul {\n        left: -30px\n    }\n    ul.main-menu>li.dropdown:hover ul,\n    ul.main-menu>li.dropdown:hover ul:before {\n        visibility: hidden;\n        opacity: 0;\n        top: 100%\n    }\n    ul.main-menu>li.dropdown.open ul,\n    ul.main-menu>li.dropdown.open ul:before {\n        visibility: visible;\n        opacity: 1;\n        top: 100%\n    }\n    ul.main-menu>li.dropdown.open ul {\n        left: 0\n    }\n}\n/** Header Area **/\n.header-area {\n    background: none;\n    position: fixed;\n    width: 100%;\n  }\n.main-menu {\n      background: none;\n  }\n.slider-content {\n    position: fixed !important;\n    top: 70% !important;\n  }\n.top-info p {\n    color: #fff;\n  }\nul.main-menu li a {\n    color: #fff;\n  }\nul.main-menu > li.dropdown ul li a {\n    color: #61656F;\n  }\nul.main-menu > li.dropdown ul li a:hover {\n    color: #a6ce39;\n  }\nul.main-menu > li {\n    text-decoration: underline;\n\n  }\n/* For mobile devices */\n@media only screen and (max-width: 767px) {\n    body {\n      background-image: url(/assets/images/backmobile3.jpg);\n      background-position: left\n      }\n     .wrapper {\n      min-height: 400px;\n      }\n      .sliderslogan {\n      text-align: left;\n      }\n      .home_footer {\n        left: 11% !important;\n      }\n\n  }\n@media (max-width: 991px) {\n    .header-area {\n      z-index: 6;\n    }\n    .navbar-collapse.collapse.in {\n      background: white;\n    }\n    ul.main-menu li a {\n      color: #61656F;\n    }\n    ul.main-menu > li {\n      text-decoration: none;\n    }\n  }\nsection.home-slider {\n    padding: 0\n}\n.flexslider {\n    border: 0;\n    border-radius: 0;\n    margin: 0\n}\n.flexslider li.has-overlay:after {\n    position: absolute;\n    top: 0;\n    bottom: 0;\n    left: 0;\n    right: 0;\n    content: \" \";\n    background: rgba(0, 0, 0, .44)\n}\n.slider-content {\n    position: absolute;\n    display: block;\n    top: 50%;\n    -webkit-transform: translateY(-50%);\n            transform: translateY(-50%);\n    left: 0;\n    z-index: 5;\n    width: 100%\n}\n.slider-content .primary-btn,\n.slider-content h2 {\n    font-family: 'aktiv_groteskbold', Arial, sans-serif;\n    font-weight: 700\n}\n.slider-content h2 {\n    font-size: 50px;\n    line-height: 1.2;\n    margin: 0 0 30px;\n    color: #fff\n}\n.slider-content p {\n    font-size: 20px;\n    color: #a6ce39;\n    line-height: 1.4;\n    font-weight: 100;\n    margin: 0\n}\n.slider-content .border-btn,\n.slider-content .primary-btn {\n    border-radius: 3px;\n    font-size: 20px;\n    padding: 0 40px;\n    line-height: 60px\n}\n.slider-content .primary-btn {\n    background: #ffda44;\n    color: #4c443a\n}\n.slider-content .border-btn {\n    background: 0 0;\n    color: #fff;\n    border: 1px solid #fff\n}\n.slider-content .primary-btn i {\n    padding-left: 10px\n}\n.slider-content .primary-btn:hover {\n    background: #ecc124\n}\n@media all and (max-width:991px) {\n    .slider-content h2 {\n        font-size: 44px;\n        margin-bottom: 25px\n    }\n    .slider-content p {\n        font-size: 18px;\n        margin-bottom: 0\n    }\n    .slider-content .primary-btn {\n        font-size: 18px;\n        line-height: 54px;\n        border: 0\n    }\n    .flexslider .slides>li {\n        height: 500px\n    }\n    .flexslider .slides>li:first-child img {\n        height: 100%;\n        -webkit-object-fit: cover;\n        -moz-object-fit: cover;\n        -ms-object-fit: cover;\n        -o-object-fit: cover;\n           object-fit: cover;\n        -o-object-position: center right;\n           object-position: center right\n    }\n    .flexslider .slides>li img {\n        height: 100%;\n        -webkit-object-fit: cover;\n        -moz-object-fit: cover;\n        -ms-object-fit: cover;\n        -o-object-fit: cover;\n           object-fit: cover\n    }\n}\n@media all and (max-width:767px) {\n    .slider-content h2 {\n        font-size: 40px;\n        margin-bottom: 20px\n    }\n    .slider-content p {\n        font-size: 17px;\n        margin-bottom: 0;\n        line-height: 1.6\n    }\n    .slider-content .primary-btn {\n        font-size: 16px;\n        line-height: 48px;\n        padding: 0 30px;\n        border: 0\n    }\n    .flex-direction-nav {\n        display: none\n    }\n}\n@media all and (max-width:600px) {\n    .slider-content h2.kad {\n        font-size: 50px\n    }\n    .slider-content h2 {\n        font-size: 36px;\n        margin-bottom: 15px\n    }\n    .slider-content p {\n        font-size: 16px;\n        margin-bottom: 0;\n        line-height: 1.6\n    }\n    .flexslider .slides>li {\n        height: 420px\n    }\n}\n@media all and (max-width:480px) {\n    .slider-content h2 {\n        font-size: 30px;\n        margin-bottom: 12px\n    }\n    .slider-content p {\n        font-size: 14px\n    }\n    .flexslider .slides>li {\n        height: 450px\n    }\n}\n@media all and (max-width:400px) {\n    .slider-content h2 {\n        font-size: 24px;\n        margin-bottom: 12px\n    }\n}\nh2.color-title {\n    display: inline-block;\n    font-size: 16px;\n    font-weight: 700;\n    color: #fff;\n    background: #455253;\n    margin: 0;\n    padding: 0 15px;\n    line-height: 28px\n}\n.slider-content .border-btn,\na.link,\nh4.subtitle {\n    font-family: 'aktiv_groteskbold', Arial, sans-serif;\n    font-weight: 700\n}\n.home_footer {\n    position: absolute;\n    bottom: 0;\n    left: 0;\n    font-size: 10px;\n  }\n.home_footer p {\n    color: #fff;\n    font-size: 10px;\n    text-align: center\n} \n"

/***/ }),

/***/ "./src/app/homepage/homepage.component.html":
/***/ (function(module, exports) {

module.exports = "<div id=\"home\">\n    <div class=\"wrapper\">\n        <header>\n            <div class=\"header-area\">\n<div class=\"container\">\n    <div class=\"row\">\n            <div class=\"col-md-3 logo\">\n                <a href=\"./\"><img src=\"assets/logo-arkad.png\"></a>\n                <!-- Responsive Toggle Menu -->\n                <button type=\"button\" class=\"navbar-toggle\" data-toggle=\"collapse\" data-target=\"#navbar\">\n                        <span class=\"sr-only\"> Main Menu </span>\n                        <span class=\"icon-bar\"></span>\n                        <span class=\"icon-bar\"></span>\n                        <span class=\"icon-bar\"></span>\n                    </button>\n            </div>\n\n            <div class=\"col-md-9 top-info-social\">\n                    <div class=\"pull-right\">\n                        <div class=\"top-info\">\n                            <div class=\"call\">\n                                <h3> CONTACT US </h3>\n                                <p> <i class=\"fa fa-phone\" aria-hidden=\"true\"></i> +966 13 892 1400 </p>\n                            </div>\n                            <div class=\"email\">\n                                <p> <i class=\"fa fa-envelope\" aria-hidden=\"true\"></i> info@arkad.com </p>\n                            </div>\n                        </div>\n                        <div class=\"social\">\n                            <ul class=\"social-icons\">\n                                <li><a href=\"https://twitter.com/arkad_ec\" target=\"_blank\"><i class=\"fa fa-twitter\" aria-hidden=\"true\"></i></a></li>\n                                <li><a href=\"https://www.linkedin.com/company-beta/4866806/\" target=\"_blank\"><i class=\"fa fa-linkedin\" aria-hidden=\"true\"></i></a></li>\n                            </ul>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n\n\n        <nav id=\"navbar\" class=\"collapse navbar-collapse main-menu\">\n                <div class=\"container\">\n                    <ul class=\"main-menu\">\n                        <li class=\"dropdown\">\n                          <a [routerLink]=\"['/header']\"> Home </a>\n    \n                        </li>\n                        <li class=\"dropdown \">\n                            <a href=\"who_are_we.php\"  data-toggle=\"dropdown\">Who We Are <i class=\"fa fa-chevron-down \"></i></a>\n                            <ul>\n                                <li> <a [routerLink]=\"['/about-Arkad']\" >                      About Arkad </a> </li>\n                                <li> <a [routerLink]=\"['/strategic-vision']\">               Strategic Vision</a> </li>\n                                <li> <a [routerLink]=\"['/arkad-values']\">                       Arkad Values </a> </li>\n                                <li> <a [routerLink]=\"['/coporate-governance']\">             Corporate Governance</a></li>\n                            </ul>\n                        </li>\n                        <li class=\"dropdown \">\n                            <a href=\"#\" data-toggle=\"dropdown\"> What we do <i class=\"fa fa-chevron-down\"></i></a>\n                            <ul>\n                                <li> <a [routerLink]=\"['/construction-services']\">        Construction Services </a> </li>\n                                <li> <a [routerLink]=\"['/project-management']\">   Project Management </a> </li>\n                                <li> <a [routerLink]=\"['/engineering-services']\">        Engineering Services </a> </li>\n                                <li> <a [routerLink]=\"['/research-developement']\">        Research & Development </a> </li>\n                            </ul>\n                        </li>\n                        <li class=\"\"><a [routerLink]=\"['/sustainability']\"> Sustainability </a></li>\n                        <li class=\"\"><a [routerLink]=\"['/projects']\"> Projects </a></li>\n                        <li class=\"\"><a [routerLink]=\"['/news']\">     News </a></li>\n                        <li><a [routerLink]=\"['/careers']\">   Careers </a></li>\n                        <li class=\"\"><a href=\"contact.php\">  Contact </a></li>\n                    </ul>\n                </div>\n            </nav>\n\n\n\n            \n            </div>\n    </header>\n    <section class=\"home-slider\">\n        <div class=\"flexslider\">\n            <ul class=\"slides\">\n                <div class=\"slider-content\">\n                    <div class=\"container\">\n                        <h2 class=kad>Arkad</h2>\n                        <p class=sliderslogan>ENGINEERING / PROCUREMENT / CONSTRUCTION\n                            <h2>STRUCTURED FOR SUCCESS</h2>\n                        </div>\n                    </div>\n                </ul>\n            </div>\n        </section>\n        <a class=cd-top href=#0>Top</a>\n    \n    </div>\n    <section>\n        <div class=\"col-md-12 home_footer\">\n            <p>Copyright © 2017 Arkad Co. All Rights Reserved.</p>\n        </div>\n    </section>\n</div>\n    "

/***/ }),

/***/ "./src/app/homepage/homepage.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomepageComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HomepageComponent = /** @class */ (function () {
    function HomepageComponent() {
    }
    HomepageComponent.prototype.ngOnInit = function () {
        $.getScript('/assets/js/vamsi.js');
    };
    HomepageComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-homepage',
            template: __webpack_require__("./src/app/homepage/homepage.component.html"),
            styles: [__webpack_require__("./src/app/homepage/homepage.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], HomepageComponent);
    return HomepageComponent;
}());



/***/ }),

/***/ "./src/app/news/news.component.css":
/***/ (function(module, exports) {

module.exports = ".about-content{\n    padding-bottom: 40px;\n}\n\n.row.stats.stats-2,\n.sidebar-blog-categories ul,\n.sidebar-categories ul {\n    background: #f4f5f8\n}\n\n.sidebar-blog-categories ul li a,\n.sidebar-categories ul li a {\n    font-size: 17px;\n    color: #61656f;\n    padding: 24px 30px;\n    display: block;\n    line-height: 1;\n    border-bottom: 1px solid #fcfcfd\n}\n\n.sidebar-blog-categories ul li a.active,\n.sidebar-categories ul li a.active {\n    color: #fff;\n    background: #a6ce39\n}\n\n.sidebar-categories ul li a:hover {\n    background: #e9e9e9\n}\n\n.sidebar>div {\n    margin-bottom: 45px\n}\n\n.sidebar>div:last-child,\ndiv.process-bar>.skillbar:last-child {\n    margin-bottom: 0\n}\n\na.btn, .btn:focus  {\n    background: #a6ce39;\n    color: #fff;\n    margin-top: 10px;\n  }\n\na.btn:hover {\n    background: #fff;\n    color: #a6ce39;\n  }\n\n.news-content h3 {\n    font-size: 20px;\n    color: #a6ce39;\n    line-height: 1.4;\n    margin: 0 0 20px;\n}"

/***/ }),

/***/ "./src/app/news/news.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"wrapper\">\n  <app-header></app-header>\n<div class=\"container\">\n    <div class=\"row\">\n        <div class=\"col-md-3 sidebar left hidden-sm hidden-xs\">\n            <div class=\"sidebar-categories\">\n<ul>\n<li> <a href=\"news.php\"                         class=\"active\"> News</a> </li>\n</ul>\n</div>\n    </div>\n\n        <div class=\"col-md-9 services-content\">\n            <section class=\"blog-services\">\n                <div class=\"row news\">\n                  <div class=\"col-sm-12\">\n                      <div class=\"news-content\">\n                          <h3 style=\"direction: rtl;\">\"أركاد\" تتوسع خارجيا وتستحوذ على حصة مسيطرة بأصول ABB</h3>\n                          <p style=\"direction: rtl;\">في الوقت الذي تشهد فيه شركات الخدمات النفطية الدولية ضغوطا بسبب تراجع استثمارات شركات النفط وانخفاض أسعار النفط، تتوسع الشركة السعودية أركاد للهندسة والإنشاء خارج المملكة من خلال الاستحواذ على حصة مسيطرة من أصول شركة \" ABB \" السويسرية في مقاولات النفط والغاز، الأمر الذي سيفتح لها المجال للتوسع في شمال إفريقيا ومنطقة الخليج.</p>\n                          <a href=\"http://ara.tv/8ps8e\" target=\"_blank\" class=\"btn\">Read More</a>\n                          <hr style=\"height: 1px;\">\n                      </div>\n                  </div>\n                  <div class=\"col-sm-12\">\n                      <div class=\"news-content\">\n                          <h3>Saudi Aramco Contractor Arkad Forms Oil, Gas Venture With ABB</h3>\n                          <p>Saudi energy services company Arkad, which is building a nationwide pipeline network for oil giant Saudi Aramco, will expand outside the kingdom in a venture with ABB Ltd. that opens the doors to business in North Africa and the Gulf region.</p>\n                          <a href=\"https://www.bloomberg.com/news/articles/2017-11-06/saudi-aramco-contractor-arkad-forms-oil-gas-venture-with-abb\" target=\"_blank\" class=\"btn\">Read More</a>\n                          <hr style=\"height: 1px;\">\n                      </div>\n                  </div>\n                  <div class=\"col-sm-12\">\n                      <div class=\"news-content\">\n                          <h3>ABB teams up with Saudi firm Arkad for turnkey oil and gas projects</h3>\n                          <p>wiss engineering conglomerate ABB is putting its turnkey projects arm for the oil and gas industry into a joint venture majority owned by Saudi Arabia’s Arkad Engineering & Construction, as ABB seeks to “optimise” its business portfolio, the company said on Monday.</p>\n                          <a href=\"https://reut.rs/2zyu2Fe\" target=\"_blank\" class=\"btn\">Read More</a>\n                          <hr style=\"height: 1px;\">\n                      </div>\n                  </div>\n                    <div class=\"col-sm-12\">\n                        <div class=\"news-content\">\n                            <h3>ARKAD EXPANDS IN PETROCHEMICAL SECTOR</h3>\n                            <p>Arkad’s horizon will soon be meeting with the Petrochemical Sectors and will become a complete solution for the end users in both Kingdom of Saudi Arabia and MENA.</p>\n                            <hr style=\"height: 1px;\">\n                        </div>\n                    </div>\n                    <div class=\"col-sm-12\">\n                        <div class=\"news-content\">\n                            <h3> ARKAD GROWTH IN INTERNATIONAL MARKET </h3>\n                            <p>Arkad E & C is in long term agreements with world class EPC Companies to form local support services agreement in Kingdom of Saudi Arabia and MENA.</p>\n                        </div>\n                        <hr style=\"height: 1px;\">\n                    </div>\n\n                    <!-- <div class=\"clearfix spacer-60\"> </div> -->\n\n                    <div class=\"col-sm-12\">\n                        <div class=\"news-content\">\n                            <h3>ARKAD’S TECHNOLOGICAL ADVANCEMENT WITH ROBOTICS </h3>\n                            <p>Arkad is utilizing state of the art equipment (advanced robotics) in pipelines and plant service industry, especially for Weld Protection & Coating. A new division is being developed especially to cater the upcoming requirements in Power Sector.</p>\n                        </div>\n                        <hr style=\"height: 1px;\">\n                    </div>\n\n                    <div class=\"col-sm-12\">\n                        <div class=\"news-content\">\n                            <h3> ARKAD E&C AT MEOS-2017, EVENT IN BAHRAIN 7TH-8TH MARCH, 2017 </h3>\n                            <p>Arkad had a remarkable response from the international & local industry professionals participating in the event. Hundreds of multidisciplinary professionals were entertained and briefed about Vision, Mission and the capabilities of Arkad E & C.</p>\n                        </div>\n                        <hr style=\"height: 1px;\">\n                    </div>\n\n                    <!-- <div class=\"clearfix spacer-60\"> </div> -->\n\n                    <div class=\"col-sm-12\">\n                        <div class=\"news-content\">\n                            <h3> ARKAD PARTICIPATED MIDDLE EAST OIL & GAS SHOW (MEOS) 201 - BAHRAIN </h3>\n                            <p>MEOS-2017 event, held under the patronage of His Royal Highness Prince Khalifa bin Salman Al Khalifa, the Prime Minister of Bahrain, covered a range of topics focused on the future of hydrocarbons in the energy mix. The biennial conference has played host to more than 92,000 industry leaders and professionals since its inception nearly four decades ago.</p>\n                        </div>\n                        <hr style=\"height: 1px;\">\n                    </div>\n\n                    <div class=\"col-sm-12\">\n                        <div class=\"news-content\">\n                            <h3>ARKAD LOCALIZATION & SAUDIZATION EMPOWERMENT STRUCTURE</h3>\n                            <p>Arkad is committed to achieve Kingdom’s Vision 2030 by promoting Saudization content in all disciplines and have achieved Platinum Nitaqaat status to empower the Saudi Work Force in various IKTVA categories throughout the Kingdom.</p>\n                        </div>\n                        <hr style=\"height: 1px;\">\n                    </div>\n\n                    <div class=\"col-sm-12\">\n                        <div class=\"news-content\">\n                            <h3>FOUR EPC CONTRACTS ESTIMATED TOTAL OF OVER $1BN AWARDED TO ARKAD E&C</h3>\n                            <p>To build pipelines for state-owned oil and gas producer Saudi Aramco awarded Four (04) EPC contracts worth an estimated total of over $1bn. The scope of the projects includes installing pipelines for Aramco’s phase two Master Gas System Expansion (MGSE) and Fadhili Gas Program megaprojects.</p>\n                        </div>\n                        <hr style=\"height: 1px;\">\n                    </div>\n\n                    <div class=\"col-sm-12\">\n                        <div class=\"news-content\">\n                            <h3>TOP 10 MENA-BASED COMPANY: MEED’S</h3>\n                            <p>Arkad was third most successful company in MEED’s latest annual survey of EPC awards in the Middle East and North Africa (Mena) hydrocarbons sector for the 12 months ending 20 June 2016. It was also the only Mena-based company in the top 10.</p>\n                        </div>\n                        <hr style=\"height: 1px;\">\n                    </div>\n\n                    <div class=\"col-sm-12\">\n                        <div class=\"news-content\">\n                            <h3>SAUDI KAD RE-BRANDS AS ARKAD</h3>\n                            <p>“Leading Saudi engineering, procurement and construction company Saudi KAD announced a name change in February 2017, and the launch of an updated corporate identity, as part of the company’s strategic realignment ahead of its regional expansion program.” -MEED</p>\n                        </div>\n                        <hr style=\"height: 1px;\">\n                    </div>\n                </div>\n            </section>\n        </div>\n\n       \n\n    </div>\n</div>\n</div>\n<app-footer></app-footer>"

/***/ }),

/***/ "./src/app/news/news.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NewsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var NewsComponent = /** @class */ (function () {
    function NewsComponent() {
    }
    NewsComponent.prototype.ngOnInit = function () {
    };
    NewsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-news',
            template: __webpack_require__("./src/app/news/news.component.html"),
            styles: [__webpack_require__("./src/app/news/news.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], NewsComponent);
    return NewsComponent;
}());



/***/ }),

/***/ "./src/app/project-management/project-management.component.css":
/***/ (function(module, exports) {

module.exports = "\n\n\n.row.stats.stats-2,\n.sidebar-blog-categories ul,\n.sidebar-categories ul {\n    background: #f4f5f8\n}\n\n\n.sidebar-blog-categories ul li a,\n.sidebar-categories ul li a {\n    font-size: 17px;\n    color: #61656f;\n    padding: 24px 30px;\n    display: block;\n    line-height: 1;\n    border-bottom: 1px solid #fcfcfd\n}\n\n\n.sidebar-blog-categories ul li a.active,\n.sidebar-categories ul li a.active {\n    color: #fff;\n    background: #a6ce39\n}\n\n\n.sidebar-categories ul li a:hover {\n    background: #e9e9e9\n}\n\n\n.sidebar>div {\n    margin-bottom: 45px\n}\n\n\n.sidebar>div:last-child,\ndiv.process-bar>.skillbar:last-child {\n    margin-bottom: 0\n}\n\n\nsection.services-checmicals {\n    padding: 0;\n}\n\n\nh4.subtitle {\n    line-height: 1.4;\n    margin: 0 0 10px;\n    font-size: 20px;\n    color: #a6ce39;\n}\n\n\n.service ul li {\n    font-size: 16px;\n    color: #677078;\n    padding: 5px 0 5px 30px;\n    position: relative;\n    font-family: 'aktiv_groteskregular', Arial, sans-serif\n}\n\n\n.service ul li:last-child {\n    border-bottom: 0;\n    margin-bottom: 10px\n}\n\n\n.service ul li i.fa {\n    color: #455253;\n    padding-right: 15px;\n    font-size: 17px;\n    position: absolute;\n    line-height: 30px;\n    left: 0\n}"

/***/ }),

/***/ "./src/app/project-management/project-management.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"wrapper\">\n    <app-header></app-header>\n    <div class=\"container\">\n        <div class=\"row services-sidebar\">\n\n            <div class=\"col-md-3 sidebar left hidden-sm hidden-xs\">\n                <div class=\"sidebar-blog-categories\">\n<ul>\n<li> <a href=\"service-construction.php\"   class=\"\"> Construction Services </a> </li>\n<li> <a href=\"service-project-managment.php\"    class=\"active\"> Project Management </a> </li>\n<li> <a href=\"services-engineering.php\"    class=\"\"> Engineering Services </a> </li>\n<li> <a href=\"services-research.php\"    class=\"\"> Research & Development </a> </li>\n</ul>\n</div>\n        </div>\n\n            <div class=\"col-md-9 services-content\">\n                <div class=\"spacer-40\"></div>\n                <section class=\"services-checmicals service\">\n                    <div>\n                        <h4 class=\"chemicals-subtitle subtitle\"> We provide professional services offered by our team of experts which are classified under the following five broad divisions:</h4>\n                        <div class=\"col-sm-12\">\n                          <ol id=\"numbers\">\n                            <li>Oil and gas upstream support. engineering and construction services.</li>\n                            <li>Petrochemical upstram support, engineering and construction services.</li>\n                            <li>Nuclear engineering and construction services.</li>\n                            <li>Mining logistics, engineering and construction services.</li>\n                            <li>Renewable engergy technologies, support, engineering and construction services.</li>\n                          </ol>\n                        </div>\n                        <div class=\"spacer-40\"></div>\n                        <p>Arkad's core competency lies in its technical know-how and ground-level knowledge.</p>\n\n                        <p>Our expertise spans every aspect of EPC contracting. This primarily includes:</p>\n                        <div class=\"col-sm-12\">\n                            <ul>\n                                <li><i class=\"fa fa-dot-circle-o\" aria-hidden=\"true\"></i>Project Initiation & Planning.</li>\n                                <li><i class=\"fa fa-dot-circle-o\" aria-hidden=\"true\"></i>Project & Strategy Alignment.</li>\n                                <li><i class=\"fa fa-dot-circle-o\" aria-hidden=\"true\"></i>Project Execution Readiness.</li>\n                                <li><i class=\"fa fa-dot-circle-o\" aria-hidden=\"true\"></i>Project Management Training.</li>\n                            </ul>\n                        </div>\n                        <p>Our Consultation Division covers in detail the following key areas:</p>\n                        <div class=\"col-sm-6\">\n                            <ul>\n                                <li><i class=\"fa fa-dot-circle-o\" aria-hidden=\"true\"></i>Route Selection and Feasibility Studies.</li>\n                                <li><i class=\"fa fa-dot-circle-o\" aria-hidden=\"true\"></i>Logistics Studies and Reports.</li>\n                                <li><i class=\"fa fa-dot-circle-o\" aria-hidden=\"true\"></i>FEED Engineering and FEED Verification.</li>\n                                <li><i class=\"fa fa-dot-circle-o\" aria-hidden=\"true\"></i>Detail Design.</li>\n                                <li><i class=\"fa fa-dot-circle-o\" aria-hidden=\"true\"></i>Project Management.</li>\n                                <li><i class=\"fa fa-dot-circle-o\" aria-hidden=\"true\"></i>Stakeholder Engagement & Management.</li>\n                            </ul>\n                        </div>\n                        <div class=\"col-sm-6\">\n                            <ul>\n                              <li><i class=\"fa fa-dot-circle-o\" aria-hidden=\"true\"></i>Project Interface Management.</li>\n                                <li><i class=\"fa fa-dot-circle-o\" aria-hidden=\"true\"></i>Specialized Equipment Procurement.</li>\n                                <li><i class=\"fa fa-dot-circle-o\" aria-hidden=\"true\"></i>Project Control.</li>\n                                <li><i class=\"fa fa-dot-circle-o\" aria-hidden=\"true\"></i>Planning.</li>\n                                <li><i class=\"fa fa-dot-circle-o\" aria-hidden=\"true\"></i>Earning Value Management.</li>\n                                <li><i class=\"fa fa-dot-circle-o\" aria-hidden=\"true\"></i>Risk and Opportunity Analysis.</li>\n                            </ul>\n                        </div>\n                    </div>\n                </section>\n\n                <div class=\"spacer-80\"> </div>\n\n            </div>\n\n\n        </div>\n    </div>\n\n  \n  </div>\n  <app-footer></app-footer>"

/***/ }),

/***/ "./src/app/project-management/project-management.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProjectManagementComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ProjectManagementComponent = /** @class */ (function () {
    function ProjectManagementComponent() {
    }
    ProjectManagementComponent.prototype.ngOnInit = function () {
    };
    ProjectManagementComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-project-management',
            template: __webpack_require__("./src/app/project-management/project-management.component.html"),
            styles: [__webpack_require__("./src/app/project-management/project-management.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ProjectManagementComponent);
    return ProjectManagementComponent;
}());



/***/ }),

/***/ "./src/app/projects/projects.component.css":
/***/ (function(module, exports) {

module.exports = "\n.news-content h3 {\n    font-size: 20px;\n    color: #a6ce39;\n    line-height: 1.4;\n    margin: 0 0 20px;\n}\nh3.sidebar-title {\n    font-size: 17px;\n    font-weight: 400;\n    font-family: 'aktiv_groteskbold',Arial,sans-serif;\n    color: #c0c4c7;\n    text-transform: uppercase;\n    margin: 0 0 20px;\n}\n.about-content{\n    padding-bottom: 40px;\n}\n.row.stats.stats-2,\n.sidebar-blog-categories ul,\n.sidebar-categories ul {\n    background: #f4f5f8\n}\n.sidebar-blog-categories ul li a,\n.sidebar-categories ul li a {\n    font-size: 17px;\n    color: #61656f;\n    padding: 24px 30px;\n    display: block;\n    line-height: 1;\n    border-bottom: 1px solid #fcfcfd\n}\n.sidebar-blog-categories ul li a.active,\n.sidebar-categories ul li a.active {\n    color: #fff;\n    background: #a6ce39\n}\n.sidebar-categories ul li a:hover {\n    background: #e9e9e9\n}\n.sidebar>div {\n    margin-bottom: 45px\n}\n.sidebar>div:last-child,\ndiv.process-bar>.skillbar:last-child {\n    margin-bottom: 0\n}\n\n\n"

/***/ }),

/***/ "./src/app/projects/projects.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"wrapper\">\n  <app-header></app-header>\n<div class=\"container\">\n  <div class=\"row services-sidebar\">\n\n        <div class=\"col-md-3 sidebar left hidden-sm hidden-xs\">\n\n          <div class=\"sidebar-blog-categories\">\n              <h3 class=\"sidebar-title\">Sort By Clients</h3>\n              <ul>\n                  <li><button class=\"btn-projects-active sorter\" data-filter=\"*\">All</button></li>\n                  <li><button class=\"btn-projects sorter\" data-filter=\"Aramco\">Saudi Aramco</button></li>\n                  <li><button class=\"btn-projects sorter\" data-filter=\"Marafiq\">Marafiq</button></li>\n                  <li><button class=\"btn-projects sorter\" data-filter=\"JESCO\">JESCO</button></li>\n                  <li><button class=\"btn-projects sorter\" data-filter=\"Royal\">Royal Commission of Jubail & Yanbu</button></li>\n                  <li><button class=\"btn-projects sorter\" data-filter=\"Tasnee\">Tasnee</button></li>\n                  <li><button class=\"btn-projects sorter\" data-filter=\"SAMCO\">SAMCO</button></li>\n              </ul>\n          </div>\n      </div>\n\n      <div class=\"col-md-9 services-content\">\n\n          <section class=\"projects-company\">\n              <div class=\"row\">\n                  <ul id=\"sort-me\">\n                      <li class=\"Aramco\">\n                          <div class=\"col-sm-12\">\n                              <div class=\"news-content\">\n                                  <h3> MAZALIJ & ABU JIFAN PIPELINES-KHURAIS AL CRUDE INCREMENT PROJECT </h3>\n                                  <p>Detail Engineering Design with procurement of 12”, 16” & 18” diameter approximately 245 KM long stars from Mazalij Gas plant towards Abu Jifan with complete internal and external FBE Coating. Major scope is to construct the ROW along the pipe line, construction of pipe lines of different sizes, RTR coating, 8 valve station, burn pits, scrapper traps, Corrosion inhibitor skids, cp system initializing, overhead transmission lines, 100% RT, six (6) thrust bore road crossing.</p>\n                                  <p class=\"icons\"><i class=\"fa fa-user\" aria-hidden=\"true\"></i> Client: Saudi Aramco </p>\n                                  <p class=\"icons\"><i class=\"fa fa-map-marker\" aria-hidden=\"true\"></i> Location: Mazalij & Abu Jifan</p>\n\n                              </div>\n                              <hr style=\"height: 1px;\">\n                          </div>\n                      </li>\n                      <li class=\"Aramco\">\n                          <div class=\"col-sm-12\">\n                              <div class=\"news-content\">\n                                  <h3> MASTER GAS SYSTEM PHASE II PACKAGE I WESTERN REGION PIPE LINE </h3>\n                                  <p>Detail Engineering Design , Procurement, Construction of 422 KM 56” under ground Pipe line Start From Pump station 07 near Riyadh to Pump station 11 near Madina. Major Scope is to Construct the ROW along the Pipe line, Construction of Pipe line, 21 Valve station, Burn Pits, Black Powder Filtration System, Corrosion inhibitor Skids, eleven (11) Thrust Bore Road Crossing.</p>\n                                  <p class=\"icons\"><i class=\"fa fa-user\" aria-hidden=\"true\"></i> Client: Saudi Aramco </p>\n                                  <p class=\"icons\"><i class=\"fa fa-map-marker\" aria-hidden=\"true\"></i> Location: Western Region</p>\n                              </div>\n                              <hr style=\"height: 1px;\">\n                          </div>\n                      </li>\n                      <li class=\"Aramco\">\n                          <div class=\"col-sm-12\">\n                              <div class=\"news-content\">\n                                  <h3> MASTER GAS SYSTEM PHASE II PACKAGE II CENTRAL REGION PIPE LINE </h3>\n                                  <p>Detail Engineering Design , Procurement, Construction of 226 KM 46” under ground Pipe line Start From Pump station 06 near Riyadh to Qassim Power Plant. The pipeline will be paralleled to existing AYQS-1 pipeline Major Scope is to Construct the ROW along the Pipe line, Construction of Pipe line, 7 Valve station, Burn Pits, Black Powder Filtration System, Corrosion inhibitor Skids, Seven (7) Thrust Bore/ Open Cut Road Crossing.</p>\n                                  <p class=\"icons\"><i class=\"fa fa-user\" aria-hidden=\"true\"></i> Client: Saudi Aramco </p>\n                                  <p class=\"icons\"><i class=\"fa fa-map-marker\" aria-hidden=\"true\"></i> Location: Central Region</p>\n                              </div>\n                              <hr style=\"height: 1px;\">\n                          </div>\n                      </li>\n                      <li class=\"Aramco\">\n                          <div class=\"col-sm-12\">\n                              <div class=\"news-content\">\n                                  <h3>MASTER GAS SYSTEM PHASE II PACKAGE III EASTERN REGION PIPE LINE </h3>\n                                  <p>Detail Engineering Design , Procurement, 56” Diameter Approximately 150 KM long from EWPS # 1 to BGCS#3 for SRG-3 and another 56” Diameter Approximately 40 KM   Long from BGCS#3 to KM 245.2 for SRG-2 SEC III. Major Scope is to Construct the ROW along the Pipe line, Construction of Pipe line, 10 Valve station, Burn Pits, Black Powder Filtration System, Corrosion inhibitor Skids, Ten (10) Thrust Bore/ Open Cut Road Crossing</p>\n                                  <p class=\"icons\"><i class=\"fa fa-user\" aria-hidden=\"true\"></i> Client: Saudi Aramco </p>\n                                  <p class=\"icons\"><i class=\"fa fa-map-marker\" aria-hidden=\"true\"></i> Location: Eastern Region</p>\n                              </div>\n                              <hr style=\"height: 1px;\">\n                          </div>\n                      </li>\n                      <li class=\"Aramco\">\n                          <div class=\"col-sm-12\">\n                              <div class=\"news-content\">\n                                  <h3>FADHILI DOWNSTREAM PIPE LINE</h3>\n                                  <p>Detail Engineering Design , Procurement, 56” Diameter Approximately 34 KM long start from Wasit Gas plant toward fadhili and 204 KM 56” Pipe line from Fadhili Gas Plant to EWPS 01, 40 KM 18” Utility Water Pipe line from Fahili Plan to Wasit Plant & 4” x22KM HDO Pipe line. Major Scope is to Construct the ROW along the Pipe line, Construction of Pipe line, 8 Valve station, Burn Pits, Corrosion inhibitor Skids, Six (6) Thrust Bore Road Crossing.</p>\n                                  <p class=\"icons\"><i class=\"fa fa-user\" aria-hidden=\"true\"></i> Client: Saudi Aramco </p>\n                                  <p class=\"icons\"><i class=\"fa fa-map-marker\" aria-hidden=\"true\"></i> Location: Fadhili</p>\n                              </div>\n                              <hr style=\"height: 1px;\">\n                          </div>\n                      </li>\n                      <li class=\"Aramco\">\n                          <div class=\"col-sm-12\">\n                              <div class=\"news-content\">\n                                  <h3>ONSHORE MAINTAIN POTENTIAL PROGRAM FOR NA-1B </h3>\n                                  <p>Construction of all phases of well head sites including flow lines, trunk lines, laterals, manifolds. Transfer lines, water injection lines and test and production lines. Contractor shall construct Overhead Power Line, upgrade Supervisory Control and Data Acquisition (SCADA), Remote Terminal Units (RTU’s) fiber optic cable, optical transmission equipment, Ethernet switches, and other WORK directed by Saudi Aramco</p>\n                                  <p class=\"icons\"><i class=\"fa fa-user\" aria-hidden=\"true\"></i> Client: Saudi Aramco </p>\n                                  <p class=\"icons\"><i class=\"fa fa-map-marker\" aria-hidden=\"true\"></i> Location: Northern Region</p>\n                              </div>\n                              <hr style=\"height: 1px;\">\n                          </div>\n                      </li>\n                      <li class=\"Aramco\">\n                          <div class=\"col-sm-12\">\n                              <div class=\"news-content\">\n                                  <h3>ONSHORE MAINTAIN POTENTIAL PROGRAM FOR NA-2 </h3>\n                                  <p>Construction of all phases of well head sites including flow lines, trunk lines, laterals, manifolds. transfer lines, water injection lines and test and production lines. Contractor shall construct Overhead Power Line, upgrade Supervisory Control and Data Acquisition (SCADA), Remote Terminal Units (RTU’s) fiber optic cable, optical transmission equipment, Ethernet switches, and other WORK directed by Saudi Aramco.</p>\n                                  <p class=\"icons\"><i class=\"fa fa-user\" aria-hidden=\"true\"></i> Client: Saudi Aramco </p>\n                                  <p class=\"icons\"><i class=\"fa fa-map-marker\" aria-hidden=\"true\"></i> Location: Northern Region</p>\n                              </div>\n                              <hr style=\"height: 1px;\">\n                          </div>\n                      </li>\n                      <li class=\"Aramco\">\n                          <div class=\"col-sm-12\">\n                              <div class=\"news-content\">\n                                  <h3>DAYLIGHTING PHASE III </h3>\n                                  <p>In-Plant Daylighting of five (5) pipelines laterals in Northern Area, eight (8) pipeline laterals in Southern Area and three (3) pipeline laterals in East-West Area. The existing pipelines laterals will be replaced with new above ground lateral pipes, all the work is being carried inside live plants and includes shutdown.</p>\n                                  <p class=\"icons\"><i class=\"fa fa-user\" aria-hidden=\"true\"></i> Client: Saudi Aramco </p>\n                                  <p class=\"icons\"><i class=\"fa fa-map-marker\" aria-hidden=\"true\"></i> Location: Southern Region</p>\n                              </div>\n                              <hr style=\"height: 1px;\">\n                          </div>\n                      </li>\n                      <li class=\"Aramco\">\n                          <div class=\"col-sm-12\">\n                              <div class=\"news-content\">\n                                  <h3>NEW FIRE STATION AND TWO ASL CRUDE LOADING BAYS, WASEA </h3>\n                                  <p>EPC for Two ASL crude oil loading bays. Scope includes the procurement of special mechanical equipment such as vertical pumps, truck loading arms, foam skids, MOV’s, ZV’s, etc. Installation includes 7 km of underground RTR pipe installation and 75,000 inch dia. of plant piping welding.</p>\n                                  <p class=\"icons\"><i class=\"fa fa-user\" aria-hidden=\"true\"></i> Client: Saudi Aramco </p>\n                                  <p class=\"icons\"><i class=\"fa fa-map-marker\" aria-hidden=\"true\"></i> Location: Wasea</p>\n                              </div>\n                              <hr style=\"height: 1px;\">\n                          </div>\n                      </li>\n                      <li class=\"Marafiq\">\n                          <div class=\"col-sm-12\">\n                              <div class=\"news-content\">\n                                  <h3>AL KHAIR POWER AND DESALINATION PLANT</h3>\n                                  <p>Construction and procurement for six tanks, 170,000 m3 each, including pipelines and utilities and infrastructure and related systems.</p>\n                                  <p class=\"icons\"><i class=\"fa fa-user\" aria-hidden=\"true\"></i> Client: Marafiq </p>\n                                  <p class=\"icons\"><i class=\"fa fa-map-marker\" aria-hidden=\"true\"></i> Location: Ras Al Khair</p>\n                              </div>\n                              <hr style=\"height: 1px;\">\n                          </div>\n                      </li>\n                      <li class=\"JESCO\">\n                          <div class=\"col-sm-12\">\n                              <div class=\"news-content\">\n                                  <h3>JESCO SEAMLESS PIPE PLANT</h3>\n                                  <p>Plant and In-Plant Work scope included Main Production Plant, Electrical Sub-Station, Electrical Control Buildings, Main Plant Control Pull Pit Building, Water Treatment Plants, Hydraulic Rooms, Non-Process Buildings.</p>\n                                  <p class=\"icons\"><i class=\"fa fa-user\" aria-hidden=\"true\"></i> Client: JESCO </p>\n                                  <p class=\"icons\"><i class=\"fa fa-map-marker\" aria-hidden=\"true\"></i> Location: Jubail</p>\n                              </div>\n                              <hr style=\"height: 1px;\">\n                          </div>\n                      </li>\n                      <li class=\"Royal\">\n                          <div class=\"col-sm-12\">\n                              <div class=\"news-content\">\n                                  <h3>EPC OF JIC COOLING PLANT</h3>\n                                  <p>CEEPC for offsite pipelines and onsite Works, Chilled Water Generation Plant and TSE Tertiary Treatment Plant. The scope includes all the required engineering and design work as well as procurement of mechanical and electrical equipment.</p>\n                                  <p class=\"icons\"><i class=\"fa fa-user\" aria-hidden=\"true\"></i> Client: Royal Commission of Jubail & Yanbu </p>\n                                  <p class=\"icons\"><i class=\"fa fa-map-marker\" aria-hidden=\"true\"></i> Location: Jubail</p>\n                              </div>\n                              <hr style=\"height: 1px;\">\n                          </div>\n                      </li>\n                      <li class=\"Aramco\">\n                          <div class=\"col-sm-12\">\n                              <div class=\"news-content\">\n                                  <h3>SHUAIBAH III IWPP – TANKS</h3>\n                                  <p>EPC - Design, Procurement and Construction of Tank Farms along with all the associated Pipelines, Infrastructure and Utilities.</p>\n                                  <p class=\"icons\"><i class=\"fa fa-user\" aria-hidden=\"true\"></i> Client: Saudi Aramco </p>\n                                  <p class=\"icons\"><i class=\"fa fa-map-marker\" aria-hidden=\"true\"></i> Location: Shuibah</p>\n                              </div>\n                              <hr style=\"height: 1px;\">\n                          </div>\n                      </li>\n                      <li class=\"Marafiq\">\n                          <div class=\"col-sm-12\">\n                              <div class=\"news-content\">\n                                  <h3>MARAFIQ IWPP 1 PROJECT IN JUBAIL</h3>\n                                  <p>EPC - Design, Procurement and Construction of Tank Farms along with all the associated Pipelines, Infrastructure and Utilities. The Work includes all the Civil, Electrical, Mechanical and Instrumentation Work.</p>\n                                  <p class=\"icons\"><i class=\"fa fa-user\" aria-hidden=\"true\"></i> Client: Marafiq </p>\n                                  <p class=\"icons\"><i class=\"fa fa-map-marker\" aria-hidden=\"true\"></i> Location: Jubail</p>\n                              </div>\n                              <hr style=\"height: 1px;\">\n                          </div>\n                      </li>\n                      <li class=\"Tasnee\">\n                          <div class=\"col-sm-12\">\n                              <div class=\"news-content\">\n                                  <h3>IMPORT/EXPORT PIPING WORKS IN TASNEE</h3>\n                                  <p>Construction of all phases of well head sites including flow line.</p>\n                                  <p class=\"icons\"><i class=\"fa fa-user\" aria-hidden=\"true\"></i> Client: Tasnee </p>\n                                  <p class=\"icons\"><i class=\"fa fa-map-marker\" aria-hidden=\"true\"></i> Location: Jubail</p>\n                              </div>\n                              <hr style=\"height: 1px;\">\n                          </div>\n                      </li>\n                      <li class=\"Royal\">\n                          <div class=\"col-sm-12\">\n                              <div class=\"news-content\">\n                                  <h3>PIPELINE CORRIDOR UPGRADE WITH CORROSION PROTECTION</h3>\n                                  <p>In-Plant work for Pipeline upgrade with corrosion protection – repair, replace, expansion, box culvert and fire water system. The work includes procurement activities as long as installation and construction.</p>\n                                  <p class=\"icons\"><i class=\"fa fa-user\" aria-hidden=\"true\"></i> Client: Royal Commission of Jubail & Yanbu </p>\n                                  <p class=\"icons\"><i class=\"fa fa-map-marker\" aria-hidden=\"true\"></i> Location: Jubail</p>\n                              </div>\n                              <hr style=\"height: 1px;\">\n                          </div>\n                      </li>\n                      <li class=\"SAMCO\">\n                          <div class=\"col-sm-12\">\n                              <div class=\"news-content\">\n                                  <h3>SAMCO ACRYLIC ACID PROJECT IN JUBAIL</h3>\n                                  <p>Civil, Mechanical, Electrical and Instrumentation Work. The Project is to fulfill all the In-Plant work for the Acrylic Acid Facility including the Piping work and Process Facilities.</p>\n                                  <p class=\"icons\"><i class=\"fa fa-user\" aria-hidden=\"true\"></i> Client: SAMCO </p>\n                                  <p class=\"icons\"><i class=\"fa fa-map-marker\" aria-hidden=\"true\"></i> Location: Jubail</p>\n                              </div>\n                              <hr style=\"height: 1px;\">\n                          </div>\n                      </li>\n                      <li class=\"Royal\">\n                          <div class=\"col-sm-12\">\n                              <div class=\"news-content\">\n                                  <h3>CORROSION PROTECTION PROJECT</h3>\n                                  <p>In-Plant Corrosion Protection project for Pipelines, Utility Culvert, Box Culvert, Bypass of Utilities, Fire lines, Utility Chambers, 4-6-8 Utility Culverts, Existing Utilities for Water, Power, and Feedstock etc.</p>\n                                  <p class=\"icons\"><i class=\"fa fa-user\" aria-hidden=\"true\"></i> Client: Royal Commission of Jubail & Yanbu</p>\n                                  <p class=\"icons\"><i class=\"fa fa-map-marker\" aria-hidden=\"true\"></i> Location: Jubail</p>\n                              </div>\n                              <hr style=\"height: 1px;\">\n                          </div>\n                      </li>\n                  </ul>\n              </div>\n          </section>\n      </div>\n\n      \n\n  </div>\n</div>\n</div>\n<app-footer></app-footer>\n\n<a href=\"#0\" class=\"cd-top\"> Top </a>\n"

/***/ }),

/***/ "./src/app/projects/projects.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProjectsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ProjectsComponent = /** @class */ (function () {
    function ProjectsComponent() {
    }
    ProjectsComponent.prototype.ngOnInit = function () {
        $.getScript('assets/js/filter.js');
        $.getScript('assets/js/back-to-top.js');
    };
    ProjectsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-projects',
            template: __webpack_require__("./src/app/projects/projects.component.html"),
            styles: [__webpack_require__("./src/app/projects/projects.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ProjectsComponent);
    return ProjectsComponent;
}());



/***/ }),

/***/ "./src/app/research-development/research-development.component.css":
/***/ (function(module, exports) {

module.exports = "\n.row.stats.stats-2,\n.sidebar-blog-categories ul,\n.sidebar-categories ul {\n    background: #f4f5f8\n}\n\n\n.sidebar-blog-categories ul li a,\n.sidebar-categories ul li a {\n    font-size: 17px;\n    color: #61656f;\n    padding: 24px 30px;\n    display: block;\n    line-height: 1;\n    border-bottom: 1px solid #fcfcfd\n}\n\n\n.sidebar-blog-categories ul li a.active,\n.sidebar-categories ul li a.active {\n    color: #fff;\n    background: #a6ce39\n}\n\n\n.sidebar-categories ul li a:hover {\n    background: #e9e9e9\n}\n\n\n.sidebar>div {\n    margin-bottom: 45px\n}\n\n\n.sidebar>div:last-child,\ndiv.process-bar>.skillbar:last-child {\n    margin-bottom: 0\n}\n\n\n"

/***/ }),

/***/ "./src/app/research-development/research-development.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"wrapper\">\n    <app-header></app-header>\n    <div class=\"container\">\n        <div class=\"row\">\n    \n            <div class=\"col-md-3 sidebar left hidden-sm hidden-xs\">\n                <div class=\"sidebar-blog-categories\">\n    <ul>\n    <li> <a href=\"service-construction.php\"   class=\"\"> Construction Services </a> </li>\n    <li> <a href=\"service-project-managment.php\"    class=\"\"> Project Management </a> </li>\n    <li> <a href=\"services-engineering.php\"    class=\"\"> Engineering Services </a> </li>\n    <li> <a href=\"services-research.php\"    class=\"active\"> Research & Development </a> </li>\n    </ul>\n    </div>\n        </div>\n    \n        <div class=\"col-md-9 services-content\">\n            <section class=\"sustainability\" >\n<!-- <h4 class=\"chemicals-subtitle subtitle\">Research & Development</h4> -->\n              <p>Arkad has developed strong culture with a emphasis on developing innovative technology that adds value for our customers therefore reducing costs.</p>\n              <p>All energy sectors are high-technology industries, where our, scientists, and engineers continually challenge the barriers of what is possible to find and produce energy and cost saving for our clients and associated world scale projects. New techniques and technologies discovered through R&D have been vital in enabling Arkad to be the logical partner of choice to meet our global client’s demands, and will continue to be vital as the industry overcomes current and future challenges.</p>\n              <p>Innovation and technology are vital to providing a wider, more sustainable mix of energy resources for the world’s growing population. Thousands of Shell scientists, researchers and engineers around the globe are working to develop tomorrow’s ground-breaking solutions, collaborating with experts and specialists beyond our industry.</p>\n              <p>Our researchers, scientists and engineers develop innovative ways to find and safely produce new energy solution and designs where normally it would otherwise be too difficult or costly to execute.</p>\n          </section>\n          </div>\n    \n            \n    \n        </div>\n    </div>\n    </div>\n    <app-footer></app-footer>"

/***/ }),

/***/ "./src/app/research-development/research-development.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ResearchDevelopmentComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ResearchDevelopmentComponent = /** @class */ (function () {
    function ResearchDevelopmentComponent() {
    }
    ResearchDevelopmentComponent.prototype.ngOnInit = function () {
    };
    ResearchDevelopmentComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-research-development',
            template: __webpack_require__("./src/app/research-development/research-development.component.html"),
            styles: [__webpack_require__("./src/app/research-development/research-development.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ResearchDevelopmentComponent);
    return ResearchDevelopmentComponent;
}());



/***/ }),

/***/ "./src/app/strategic-vision/strategic-vision.component.css":
/***/ (function(module, exports) {

module.exports = ".about-content{\n    padding-bottom: 40px;\n}\n\n.row.stats.stats-2,\n.sidebar-blog-categories ul,\n.sidebar-categories ul {\n    background: #f4f5f8\n}\n\n.sidebar-blog-categories ul li a,\n.sidebar-categories ul li a {\n    font-size: 17px;\n    color: #61656f;\n    padding: 24px 30px;\n    display: block;\n    line-height: 1;\n    border-bottom: 1px solid #fcfcfd\n}\n\n.sidebar-blog-categories ul li a.active,\n.sidebar-categories ul li a.active {\n    color: #fff;\n    background: #a6ce39\n}\n\n.sidebar-categories ul li a:hover {\n    background: #e9e9e9\n}\n\n.sidebar>div {\n    margin-bottom: 45px\n}\n\n.sidebar>div:last-child,\ndiv.process-bar>.skillbar:last-child {\n    margin-bottom: 0\n}\n\n.culture h2.culture-title,\n.culture h4.culture-subtitle {\n    font-size: 28px;\n    font-family: 'aktiv_groteskbold', Arial, sans-serif;\n    color: #a6ce39;\n    font-weight: 700;\n    line-height: 1;\n    margin: 0 0 25px\n}\n\n.culture h4.culture-subtitle {\n    font-size: 20px;\n    color: #4c4f54;\n    line-height: 1.4;\n    margin: 0 0 15px\n}\n\n.about-content,\n.row.employees.top-sec .text-right {\n    float: right\n}\n\n@media all and (max-width:991px) {\n    .about-content {\n        float: none\n    }\n}\n\nsection {\n    padding: 40px 0;\n}\n\n.company {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center;\n}"

/***/ }),

/***/ "./src/app/strategic-vision/strategic-vision.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"wrapper\">\n  <app-header></app-header>\n  \n<div class=\"container\">\n\n  <div class=\"row about-sidebar\">\n\n      <div class=\"col-md-9 about-content\">\n          <section class=\"about-culture\">\n              <div class=\"row culture company\">\n                  <div class=\"col-sm-6 cul\">\n                      <!-- <h4 class=\"culture-title subtitle\">Strategic Vision </h4> -->\n                      <p class=\"culture-subtitle\">Our vision is to be a global leader in oil and gas, petrochemical, nuclear, mining, renewable energy technologies, providing support, engineering and construction services. </p>\n                  </div>\n                  <div class=\"col-md-7 col-sm-12\">\n                    <img src=\"assets/images/map.png\" />\n                    <!-- <div class=\"company-image\">\n                        <div class=\"img-left hover-effect\">\n                            <img src=\"assets/images/small.jpg\" alt=\"Company Image\" />\n                        </div>\n                        <div class=\"img-right hover-effect\">\n                            <img src=\"assets/images/vision.jpg\" alt=\"Company Image\" />\n                        </div>\n                    </div> -->\n                </div>\n              </div>\n          </section>\n      </div>\n\n      <div class=\"col-md-3 sidebar left hidden-sm hidden-xs\">\n              <div class=\"sidebar-blog-categories\">\n<ul>\n<li> <a href=\"who_are_we.php\"                     class=\"\"> About Arkad </a> </li>\n<li> <a href=\"where_are_we_going.php\"             class=\"active\"> Strategic Vision </a> </li>\n<li> <a href=\"arkad_value.php\"                  class=\"\"> Arkad Values </a> </li>\n<li> <a href=\"corporate_governance.php\"         class=\"\"> Corporate Governance </a> </li>\n\n\n</ul>\n</div>\n      </div>\n\n  </div>\n\n</div>\n\n</div>\n\n\n<!-- Main Content Section -->\n<app-footer></app-footer>"

/***/ }),

/***/ "./src/app/strategic-vision/strategic-vision.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StrategicVisionComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var StrategicVisionComponent = /** @class */ (function () {
    function StrategicVisionComponent() {
    }
    StrategicVisionComponent.prototype.ngOnInit = function () {
    };
    StrategicVisionComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-strategic-vision',
            template: __webpack_require__("./src/app/strategic-vision/strategic-vision.component.html"),
            styles: [__webpack_require__("./src/app/strategic-vision/strategic-vision.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], StrategicVisionComponent);
    return StrategicVisionComponent;
}());



/***/ }),

/***/ "./src/app/sustainability/sustainability.component.css":
/***/ (function(module, exports) {

module.exports = "\n.row.stats.stats-2,\n.sidebar-blog-categories ul,\n.sidebar-categories ul {\n    background: #f4f5f8\n}\n\n\n.sidebar-blog-categories ul li a,\n.sidebar-categories ul li a {\n    font-size: 17px;\n    color: #61656f;\n    padding: 24px 30px;\n    display: block;\n    line-height: 1;\n    border-bottom: 1px solid #fcfcfd\n}\n\n\n.sidebar-blog-categories ul li a.active,\n.sidebar-categories ul li a.active {\n    color: #fff;\n    background: #a6ce39\n}\n\n\n.sidebar-categories ul li a:hover {\n    background: #e9e9e9\n}\n\n\n.sidebar>div {\n    margin-bottom: 45px\n}\n\n\n.sidebar>div:last-child,\ndiv.process-bar>.skillbar:last-child {\n    margin-bottom: 0\n}\n\n\nh4.subtitle {\n    line-height: 1.4;\n    margin: 0 0 10px;\n    font-size: 20px;\n    color: #a6ce39;\n}"

/***/ }),

/***/ "./src/app/sustainability/sustainability.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"wrapper\">\n    <app-header></app-header>\n    <div class=\"container\">\n        <div class=\"row\">\n            <div class=\"col-md-3 sidebar left hidden-sm hidden-xs\">\n                <div class=\"sidebar-categories\">\n<ul>\n<li> <a href=\"sustainability.php\"                         class=\"active\"> Sustainability</a> </li>\n</ul>\n</div>\n        </div>\n\n            <div class=\"col-md-9 services-content\">\n              <section class=\"sustainability\" >\n                <!-- <h4 class=\"chemicals-subtitle subtitle\">Sustainability </h4> -->\n                <p>As a core value, working sustainably is embedded throughout our company.\n                Our approach to sustainability is underpinned by our sustainability principles. These principles commit us to operating with transparency and integrity, fostering our organisation and culture, building a resilient business, operating responsibly and creating shared value through relationships with our stakeholders.\n                Our principles are integral to our company's drive to become a global leader in energy services which underpins our company mission, vision and values. At Arkad, sustainability encompasses not just the environmental footprint we leave on the air, water and land but also our long-term engagement with communities.</p>\n                <h4 class=\"chemicals-subtitle subtitle\">Our Principles</h4>\n                <p>Operating with transparency and integrity\n                We are open, honest and fair and we have the courage to do what’s right, balancing short- and long-term interests. This section focuses on our values-led approach in the areas of regulatory compliance, code of conduct anti-bribery and corruption, payment transparency and human rights.</p>\n                <h4 class=\"chemicals-subtitle subtitle\">Organisation and culture</h4>\n                <p>We focus on having a values-led, high-performance culture. We develop our people so we can meet our own leadership and technical requirements. All employees are assessed against the company values in their performance reviews. This section focuses on how we are growing outstanding leadership, building diverse capability from within and driving an inclusive high-performing culture enabled by technology.</p>\n                <h4 class=\"chemicals-subtitle subtitle\">Building a resilient business</h4>\n                <p>We acknowledge economic risks and uncertainties in a changing world. We are committed to supporting a sustainable energy future. This section focuses on the future we see for oil and gas and on our ability to build a resilient business capable of responding to challenges and creating new opportunities.</p>\n                <h4 class=\"chemicals-subtitle subtitle\">Operating responsibly</h4>\n                <p>We believe that it is our responsibility to ensure that our operations are safe. Effective risk management is essential to ensuring that we are best positioned to prevent and respond to any incidents that have the ability to impact our people, our communities and our environment. This section focuses on the personal health and safety of our employees, the integrity of our facilities, our ability to respond appropriately to unplanned events, our community engagements and our environmental performance. An overview of stakeholder engagement is also included.</p>\n                <h4 class=\"chemicals-subtitle subtitle\">Creating shared value</h4>\n                <p>We understand that our social licence to operate relies on establishing and maintaining meaningful and long-lasting relationships with our stakeholders. We believe that there is shared value for our business and our communities in the co-creation of opportunities in education, employment and enterprise as well as supporting communities to be resilient maximise the value of these opportunities. </p>\n                <h4 class=\"chemicals-subtitle subtitle\">Identifying and Managing Risk</h4>\n                <p>By understanding and managing our risks, we provide greater protection to our people, communities and environment. We recognise that effective management of risk is vital to a sustainable future.\n                Our most significant risks, and how they are being managed, are continually reviewed and summarised in a corporate risk profile. Stakeholder feedback and the risks and responsibilities outlined in our management framework are the two primary sources of information considered when determining our material issues.\n                </p>\n                <h4 class=\"chemicals-subtitle subtitle\">Governance</h4>\n                <p>Our approach to sustainability is incorporated in our policies, standards and Code of Conduct.  We are committed to an elevated level of corporate governance and fostering a culture that values ethical behaviour, integrity and respect.  We believe that adopting and operating in accordance with exacting standards of corporate governance is essential for sustainable long-term performance and value creation of our business.</p>\n                <h4 class=\"chemicals-subtitle subtitle\">Arkad Management System</h4>\n                <p>The Arkad Management System (AMS) provides a structured governance framework with defined accountabilities and performance requirements.  It describes our Arkad way of working, enabling us to undertake activities across our value chain that are consistent with our internal standards.</p>\n\n                <p>In 2017, Arkad launched the revised AMS following an extensive streamlining activity of all documentation across the business. The AMS is now company-wide and its content is grouped by key business activities to ensure the system remains independent of organisational structure, globally applicable and is scalable where required.</p>\n            </section>\n            </div>\n\n           \n\n        </div>\n    </div>\n\n    </div>\n    <app-footer></app-footer>\n\n    <a href=\"#0\" class=\"cd-top\"> Top </a>\n"

/***/ }),

/***/ "./src/app/sustainability/sustainability.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SustainabilityComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SustainabilityComponent = /** @class */ (function () {
    function SustainabilityComponent() {
        $.getScript('assets/js/back-to-top.js');
    }
    SustainabilityComponent.prototype.ngOnInit = function () {
    };
    SustainabilityComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-sustainability',
            template: __webpack_require__("./src/app/sustainability/sustainability.component.html"),
            styles: [__webpack_require__("./src/app/sustainability/sustainability.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], SustainabilityComponent);
    return SustainabilityComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "./src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("./node_modules/@angular/platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("./src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("./src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_12" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map