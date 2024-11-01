module.exports = {
  name: 'Michael Bleuez',
  title: 'Software Engineer',
  baseUrl: 'https://michaelb.github.io/cv/',
  facts: {
    "Residence": '<a "href=https://www.openstreetmap.org/#map=14/43.5762/7.0978" target=_blank> <i class="fa fa-home"></i>Antibes, France</a>',
    "      GitHub": ' <a href="https://github.com/michaelb" target="_blank"><i class="fa fa-github"></i>michaelb</a>',
    "    Website": ' <a href="http://michaelb.github.io" target="_blank"><i class="fa fa-globe"></i>michaelb.github.io</a>',
    "       Email": ' <a href="mailto:michael.bleuez2@gmail.com" target="_blank"><i class="fa fa-envelope"></i>michael.bleuez2@gmail.com</a>',
  },
  languages: {
    Rust: '<a href="https://www.rust-lang.org" target="_blank"><img src="https://www.vectorlogo.zone/logos/rust-lang/rust-lang-icon.svg" alt="rust" width="40" height="40"><img/></a>',
    C: '<a href="https://www.cprogramming.com/" target="_blank"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/c/c-original.svg" alt="c" width="40" height="40"/></a>',
    Python: '<a href="https://www.python.org" target="_blank"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/python/python-original.svg" alt="python" width="40" height="40"/></a>',
    Java: '<a href="https://www.java.com" target="_blank"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/java/java-original.svg" alt="java" width="40" height="40"/></a>',
    Bash: '<a href="https://www.gnu.org/software/bash/" target="_blank"> <img src="https://www.vectorlogo.zone/logos/gnu_bash/gnu_bash-icon.svg" alt="bash" width="40" height="40"/></a>',
    Lua: '<a href="https://www.lua.org" target="_blank"> <img src="https://www.vectorlogo.zone/logos/lua/lua-icon.svg" alt="lua" width="40" height="40"/></a>',
    Go: '<a href="https://golang.org" target="_blank"> <img src="https://raw.githubusercontent.com/devicons/devicon/9c6bfdb9783cdfe1018666ed76adcfd3eab6fad6/icons/go/go-original.svg" alt="go" width="40" height="40"/></a>',
    " ": " ",
  },
  technology: {
    Git: '<a href="https://git-scm.com/" target="_blank"><img src="https://www.vectorlogo.zone/logos/git-scm/git-scm-icon.svg" alt="git" width="40" height="40"/></a>',
    Linux: '<a href="https://www.linux.org/" target="_blank"><img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/linux/linux-original.svg" alt="linux" width="40" height="40"/></a>',
    'Github/Actions': '<a href="https://github.com" target="_blank"> <img src="https://www.vectorlogo.zone/logos/github/github-tile.svg" alt="github" width="40" height="40"/> </a>',
    Docker: '<a href="https://www.docker.com/" target="_blank"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/docker/docker-original-wordmark.svg" alt="docker" width="40" height="40"/> </a>',
    Ansible: '<a href="https://www.ansible.com/" target="_blank"> <img src="https://www.vectorlogo.zone/logos/ansible/ansible-icon.svg" alt="docker" width="40" height="40"/> </a>',
    Phoronix: '<a href=# target="_blank"><img src="https://logo-download.com/wp-content/data/images/svg/Phoronix-Test-Suite-logo.svg" alt="phoronix" width="50" height="40"/></a>',
    Slurm: '<a href="https://slurm.schedmd.com/" target="_blank"><img src="https://upload.wikimedia.org/wikipedia/commons/3/3a/Slurm_logo.svg" alt="slurm" width="40" height="40"></a>', 
    " ": " ",
    
  },
  experience: [
    {
      title: 'R&D Software Engineer',
      place: 'ProvenRun',
      link: 'https://provenrun.com/',
      date: '2024 - now',
      badges: ['Rust', 'C', 'embedded'],
      contents: `
<ul>
<li>Develop features and bugfixes for applications running in a Secure OS: <a href="https://provenrun.com/provencore/" style="text-decoration:underline !important;color:inherit;">provencore</a></li>
<li>Port provencore onto a new platform/board</li>
<li>Improve the Rust support for provencore applications into a full-fledged SDK</li>
</ul>
`
    },
    {
      title: 'R&D Software Engineer',
      place: 'Atos R&D Data Management',
      link: 'https://atos.net/en/',
      date: '2021 - 2023, incl. 6 month internship',
      badges: ['C', 'HPC', 'IO'],
      contents: `
<ul>
<li> Study the state-of-art of data caching technology for HPC systems</li>
<li> Identify performance bottlenecks of an <a href="https://atos.net/en/2019/product-news_2019_02_07/atos-boosts-hpc-application-efficiency-new-flash-accelerator-solution" style="text-decoration:underline !important;color:inherit;">IO accelerator</a> used as a transparent cache, and develop solutions to improve global throughput</li>
<li> Submit proposals & develop new features, resolve bugs, improving not only the complex application core but also integration, compatibility and documentation as a member of an agile team</li>
<li>Create from scratch a HPC application library and testing framework (based on the Phoronix Test Suite) to evaluate the team's products in 'production' conditions</li>
<li>Oversee an internship intended to analyze a particular HPC application</li>
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
<li>Provide day-to-day support to students and help them install and manage a Linux-based work environment</li>
<li>Take initiatives to improve quality-of-life services such as documentation, installers and scripts</li>
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
<li> Complete different, independent parts of a proof-of-concept cybersecurity project (<a href="https://github.com/michaelb/go-passwd-crack" style="text-decoration:underline !important;color:inherit;" >password cracking</a>, <a href="https://github.com/michaelb/simple-user-simulation" style="text-decoration:underline !important;color:inherit;">user simulation</a>, SCADA/PLC system) in coordination with an english-speaking, international team</li>
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
<a href="https://github.com/michaelb/sniprun" style="text-decoration:underline !important; color:inherit;" target="_blank">Sniprun</a> is my flagship open-source project. It allows users to run snippets of code directly from the editor (Neovim). In addition to the code itself, sniprun has a CI pipeline, a 'deployment' system, automated tests, CD-managed HTML documentation, and showcases team & community work. 
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
</ul>
`
    },
  ]
};
