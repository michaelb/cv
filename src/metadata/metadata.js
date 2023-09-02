module.exports = {
  name: 'Michael Bleuez',
  title: 'Rust Software Engineer',
  baseUrl: 'https://michaelb.github.io/cv/',
  facts: {
    "Residence": '<a href="https://www.google.com/maps/place/Grenoble/@45.1842207,5.6804372,13z/data=!4m5!3m4!1s0x478af48bd689be6f:0x618c10cd6e995398!8m2!3d45.188529!4d5.724524" target="_blank"><i class="fa fa-home"></i>Grenoble, France</a>',
    "   LinkedIn": ' <a href="https://www.linkedin.com/in/michael-bleuez-b2b737190/" target="_blank"><i class="fa fa-linkedin"></i>michael bleuez</a>',
    "      GitHub": ' <a href="https://github.com/michaelb" target="_blank"><i class="fa fa-github"></i>michaelb</a>',
    "    Website": ' <a href="http://michaelb.github.io" target="_blank"><i class="fa fa-globe"></i>michaelb.github.io</a>',
    "         Email": ' <a href="mailto:michael.bleuez2@gmail.com" target="_blank"><i class="fa fa-envelope"></i>michael.bleuez2@gmail.com</a>',
  },
  languages: {
    Rust: '<a href="https://www.rust-lang.org" target="_blank"><img src="https://www.vectorlogo.zone/logos/rust-lang/rust-lang-icon.svg" alt="rust" width="40" height="40"><img/></a>',
    C: '<a href="https://www.cprogramming.com/" target="_blank"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/c/c-original.svg" alt="c" width="40" height="40"/></a>',
    Python: '<a href="https://www.python.org" target="_blank"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/python/python-original.svg" alt="python" width="40" height="40"/></a>',
    Java: '<a href="https://www.java.com" target="_blank"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/java/java-original.svg" alt="java" width="40" height="40"/></a>',
    Bash: '<a href="https://www.gnu.org/software/bash/" target="_blank"> <img src="https://www.vectorlogo.zone/logos/gnu_bash/gnu_bash-icon.svg" alt="bash" width="40" height="40"/></a>',
    Go: '<a href="https://golang.org" target="_blank"> <img src="https://raw.githubusercontent.com/devicons/devicon/9c6bfdb9783cdfe1018666ed76adcfd3eab6fad6/icons/go/go-original.svg" alt="go" width="40" height="40"/></a>',
    Lua: '<a href="https://www.lua.org" target="_blank"> <img src="https://www.vectorlogo.zone/logos/lua/lua-icon.svg" alt="lua" width="40" height="40"/></a>',
    "C++": '<a href="https://www.cplusplus.com/" target="_blank"> <img src="https://raw.githubusercontent.com/devicons/devicon/9c6bfdb9783cdfe1018666ed76adcfd3eab6fad6/icons/cplusplus/cplusplus-plain.svg" alt="c++" width="40" height="40"/></a>',
    " ": " ",
  },
  technology: {
    Git: '<a href="https://git-scm.com/" target="_blank"><img src="https://www.vectorlogo.zone/logos/git-scm/git-scm-icon.svg" alt="git" width="40" height="40"/></a>',
    Linux: '<a href="https://www.linux.org/" target="_blank"><img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/linux/linux-original.svg" alt="linux" width="40" height="40"/></a>',
    Github: '<a href="https://github.com" target="_blank"> <img src="https://www.vectorlogo.zone/logos/github/github-tile.svg" alt="github" width="40" height="40"/> </a>',
    Gitlab: '<a href="https://gitlab.com" target="_blank"> <img src="https://www.vectorlogo.zone/logos/gitlab/gitlab-icon.svg" alt="gitlab" width="40" height="40"/> </a>',
    Docker: '<a href="https://www.docker.com/" target="_blank"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/docker/docker-original-wordmark.svg" alt="docker" width="40" height="40"/> </a>',
    Ansible: '<a href="https://www.ansible.com/" target="_blank"> <img src="https://www.vectorlogo.zone/logos/ansible/ansible-icon.svg" alt="docker" width="40" height="40"/> </a>',
    Phoronix: '<a href=# target="_blank"><img src="https://logo-download.com/wp-content/data/images/svg/Phoronix-Test-Suite-logo.svg" alt="phoronix" width="50" height="40"/></a>',
    Slurm: '<a href="https://slurm.schedmd.com/" target="_blank"><img src="https://upload.wikimedia.org/wikipedia/commons/3/3a/Slurm_logo.svg" alt="slurm" width="40" height="40"></a>', 
    
  },
  experience: [
    {
      title: 'Software Engineer',
      place: 'Atos R&D Data Management',
      link: 'https://atos.net/en/',
      date: '2021 - now',
      badges: ['C', 'HPC', 'IO'],
      contents: `
<ul>
<li> Study the state-of-art of data caching technology for HPC systems.</li>
<li> Identify performance bottlenecks of an <a href="https://atos.net/en/2019/product-news_2019_02_07/atos-boosts-hpc-application-efficiency-new-flash-accelerator-solution" style="text-decoration:underline !important;color:inherit;">IO accelerator</a> used as a transparent cache, and develop solutions to improve global throughput.</li>
<li> Submit proposals & develop new features, resolve bugs, improving not only the complex application core but also integration, compatibility and documentation as a member of an Agile team</li>
</ul>
`
    },
    {

      title: 'IT support (part-time)',
      place:'IT support dept. Ensimag',
      link: 'https://ensimag.grenoble-inp.fr/',
      date: '2018-2021',
      badges: ['Linux', 'IT support'],
      contents: `
<ul>
<li>Provide day-to-day support to students and help them install and manage a Linux-based work environment.</li>
<li>Take initiatives to improve quality-of-life services such as documentation, installers and scripts.</li>
</ul>
`
    },
    {
      title: 'Summer internship',
      place: 'RHEA Group (Redu, Belgium)',
      date: 'Jul-Aug 2019',
      link: 'https://www.rheagroup.com/',
      badges: ['Virtualization', 'Cybersecurity'],
      contents: `
<ul>
<li> Complete different, independent parts of a proof-of-concept cybersecurity project (<a href="https://github.com/michaelb/go-passwd-crack" style="text-decoration:underline !important;color:inherit;" >password cracking</a>, <a href="https://github.com/michaelb/simple-user-simulation" style="text-decoration:underline !important;color:inherit;">user simulation</a>, SCADA/PLC system) in coordination with an english-speaking, international team.</li>
<li> Create reproducible VM and software setups.</li>
</ul>
`
    }
  ],
  projects: [
    {
      header: '<a href="https://github.com/michaelb/sniprun" style="text-decoration:none !important; color:inherit;" target="_blank">Sniprun</a>',
      skills: ['Rust', 'Lua', 'Neovim plugin'],
      link: 'https://github.com/michaelb/sniprun',
      contents: `
<a href="https://github.com/michaelb/sniprun" style="text-decoration:underline !important; color:inherit;" target="_blank">Sniprun</a> is my flagship open-source project. It allows users to run snippets of code directly from the editor (Neovim). In addition to the code itself, sniprun has a CI pipeline, a 'deployment' system, atuomated tests, CD-managed HTML documentation, and showcases team & community work. 
`
    },
    {
      header: 'Compiler',
      skills: ['Java', 'DevOps'],
      contents: `
A one-month long team assignment to create a compiler written in Java, used on an arbitrary object-oriented langage to generate machine code and LLVM IR.
`
    },
    {
      header: '<a href="https://github.com/michaelb?tab=repositories&q=&type=source&language=&sort=stargazers" target="_blank" style="text-decoration:none !important; color:inherit;">... and many others:</a>',
      skills:[],
      contents:`
<ul>
<li> <a href="https://github.com/michaelb/shogai" target="_blank" style="text-decoration:underline !important; color:inherit;">shogai</a> and <a href="https://github.com/michaelb/shogui" target="_blank" style="text-decoration:underline !important; color:inherit;">shogui</a>, a shogi library and GUI both written in Rust </li>
<li> a surface reconstruction algorithm, in Python </li>
<li> hash crackers (<a href="https://github.com/michaelb/go-passwd-crack" target="_blank" style="text-decoration:underline !important; color:inherit;">one</a>  in PyQt/Go, another in C++/OpenCL/GPU) </li>
<li> a  <a href="https://github.com/michaelb/auto-ytdl" target="_blank" style="text-decoration:underline !important; color:inherit;">youtube-dl</a> wrapper for music, in Python </li>
<li> a generic   <a href="https://github.com/michaelb/point-clustering" target="_blank" style="text-decoration:underline !important; color:inherit;">point clustering algorithm</a> in Python </li>
<li> a  <a href="https://github.com/michaelb/simple_prime_generator" target="_blank" style="text-decoration:underline !important; color:inherit;">prime numbers generator</a>, in C </li>
</ul>
`
    },
  ]
};
