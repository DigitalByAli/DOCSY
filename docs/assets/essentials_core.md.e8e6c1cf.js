import{_ as e,o as s,c as o,a as r}from"./app.af1d8c24.js";const t="/DOCSY/workspace-diagram.jpg",a="/DOCSY/auth/login.png",n="/DOCSY/auth/workspace.png",i="/DOCSY/auth/register.png",c="/DOCSY/auth/forgot.png",d="/DOCSY/auth/reset.png",v=JSON.parse('{"title":"Core","description":"","frontmatter":{},"headers":[{"level":2,"title":"Models","slug":"models","link":"#models","children":[]},{"level":2,"title":"Frontend","slug":"frontend","link":"#frontend","children":[{"level":3,"title":"Login","slug":"login","link":"#login","children":[]},{"level":3,"title":"Choose Workspace","slug":"choose-workspace","link":"#choose-workspace","children":[]},{"level":3,"title":"Register","slug":"register","link":"#register","children":[]},{"level":3,"title":"Password forget","slug":"password-forget","link":"#password-forget","children":[]},{"level":3,"title":"Password reset","slug":"password-reset","link":"#password-reset","children":[]}]}],"relativePath":"essentials/core.md"}'),l={name:"essentials/core.md"},h=r('<h1 id="core" tabindex="-1">Core <a class="header-anchor" href="#core" aria-hidden="true">#</a></h1><p>OKSY comes with authentication and multi-workspace support out of the box.</p><h2 id="models" tabindex="-1">Models <a class="header-anchor" href="#models" aria-hidden="true">#</a></h2><p>In the <code>Core</code> folder, you find <code>User.ts</code>, <code>Membership.ts</code> and <code>Workspace.ts</code>. These models come preconfigured with the correct relations for a multi-tenant application.</p><p>They allow the following:</p><p><img src="'+t+'" alt="workspace-diagram"></p><p>In this example, we have 2 <code>Workspaces</code> and 2 <code>Users</code> (Daniel and Anne). Daniel can access <strong>both Workspaces</strong> and Sarah can only access <strong>Workspace 2</strong>. This means that <strong>Invoice 1</strong> and <strong>Invoice 2</strong> are <strong>not visible</strong> to Anne.</p><h2 id="frontend" tabindex="-1">Frontend <a class="header-anchor" href="#frontend" aria-hidden="true">#</a></h2><p>OKSY comes with built-in authentication screens.</p><h3 id="login" tabindex="-1">Login <a class="header-anchor" href="#login" aria-hidden="true">#</a></h3><p><img src="'+a+'" alt="login"></p><h3 id="choose-workspace" tabindex="-1">Choose Workspace <a class="header-anchor" href="#choose-workspace" aria-hidden="true">#</a></h3><p><img src="'+n+'" alt="workspace"></p><h3 id="register" tabindex="-1">Register <a class="header-anchor" href="#register" aria-hidden="true">#</a></h3><p><img src="'+i+'" alt="register"></p><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>Can be disabled through <code>oksy.config.ts</code>.</p></div><h3 id="password-forget" tabindex="-1">Password forget <a class="header-anchor" href="#password-forget" aria-hidden="true">#</a></h3><p><img src="'+c+'" alt="forgot"></p><div class="warning custom-block"><p class="custom-block-title">WARNING</p><p>Only works if mail credentials are configured in <code>oksy.config.ts</code></p></div><h3 id="password-reset" tabindex="-1">Password reset <a class="header-anchor" href="#password-reset" aria-hidden="true">#</a></h3><p><img src="'+d+'" alt="reset"></p>',21),p=[h];function g(m,u,_,f,k,w){return s(),o("div",null,p)}const C=e(l,[["render",g]]);export{v as __pageData,C as default};
