

# Julien-ITS

## jquery-plugin-skeleton

### Features

Basic node js module that can be used like a jquery plugin

### How to use

Assuming we have a list of badge in a div, and we want to change the class of the badge on the click

HTML :

    <div class="filters-list collapse pt-2" id="main-filters-list" data-url="/most-recent">  
     <a href="#" class="badge badge-primary all">All</a>  
     <a href="#" class="badge badge-disabled">Culture</a>  
     <a href="#" class="badge badge-disabled">Politic</a>
     </div>

JS

    var jqueryPluginSkeleton = require('./jquery-plugin-skeleton');
    
    $(function(){
       $('.filters-list').jqueryPluginSkeleton({});
    });

