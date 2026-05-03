import { skills } from '../data/portfolio';
import './Skills.css';

// Small icon/badge per skill — mix of emoji & unicode symbols
const SKILL_ICONS = {
  // Languages
  'Python':            '🐍',
  'C':                 'C',
  'C++':               'C⁺',
  'JavaScript':        'JS',
  'R':                 'R',
  'SQL':               '⛁',
  // ML / AI
  'TensorFlow':        'TF',
  'Keras':             'K',
  'Scikit-learn':      'sk',
  'NumPy':             'np',
  'Pandas':            'pd',
  'Matplotlib':        '📊',
  'Seaborn':           '〜',
  'NLTK':              '¶',
  'OpenCV':            '◎',
  'CNN':               '⬡',
  'TF-IDF':            '∑',
  'NLP':               '💬',
  // Web
  'HTML':              '⟨⟩',
  'CSS':               '{ }',
  'React':             '⚛',
  'MySQL':             '◫',
  'REST APIs':         '⇄',
  // Tools
  'Git':               '⎇',
  'GitHub':            '⊙',
  'Jupyter Notebook':  '📓',
  'Google Colab':      '▷',
  'VS Code':           '⌨',
  'Tableau':           '◼',
  'Power BI':          '📈',
  // OS
  'Windows':           '⊞',
  'Linux':             '🐧',
};

export default function Skills() {
  return (
    <section id="skills" className="section skills-section">
      <div className="container">
        <h2 className="section-title fade-in">
          My <span className="skills-title-accent">Skillset</span>
        </h2>
        <div className="divider fade-in" />

        <div className="skills-stack">
          {skills.map((group, i) => (
            <div key={i} className="skill-row fade-in">
              <div className="skill-row-header">
                <span className="skill-row-icon">{group.icon}</span>
                <h3 className="skill-row-title">{group.category}</h3>
              </div>
              <div className="skill-chips">
                {group.items.map(skill => (
                  <span key={skill} className="skill-chip">
                    <span className="skill-chip-icon">
                      {SKILL_ICONS[skill] ?? '◆'}
                    </span>
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
