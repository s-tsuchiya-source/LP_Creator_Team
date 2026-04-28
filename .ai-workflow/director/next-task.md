# Next Task: Add Validation + Human Quality Layer

## Target Project

Work only in this existing local repository:

`C:\Users\s-tsuchiya\Desktop\Webapp\LP_Creator_Team`

Do not create a new `LP_Creator_Team` folder elsewhere.

## Goal

Enhance LP_Creator_Team so it can verify and enforce that generated LPs:

1. Start with hearing questions, not immediate generation
2. Select only necessary agents, not all agents
3. Reflect Emotional CVR Layer in outputs
4. Reject outputs below required score thresholds
5. Produce practical HTML/CSS/JS
6. Follow a complete high-converting LP structure
7. Avoid AI-like writing, structure, imagery, and design

## Add Directories and Files

Create the following if missing:

```txt
validation/
├─ README.md
├─ validation-policy.md
├─ director-behavior-validation.md
├─ agent-selection-validation.md
├─ emotional-cvr-validation.md
├─ scorecard-enforcement-validation.md
├─ code-practicality-validation.md
├─ lp-structure-completeness-validation.md
├─ anti-ai-output-validation.md
└─ final-acceptance-validation.md

lp-structure-blueprint/
├─ README.md
├─ high-converting-lp-flow.md
├─ first-view-requirements.md
├─ problem-empathy-flow.md
├─ solution-mechanism-flow.md
├─ proof-trust-flow.md
├─ comparison-objection-flow.md
├─ offer-cta-flow.md
└─ post-cv-experience-flow.md

human-quality/
├─ README.md
├─ anti-ai-writing-principles.md
├─ human-copy-rules.md
├─ concrete-expression-rules.md
├─ natural-section-flow-rules.md
├─ non-generic-design-rules.md
├─ image-direction-rules.md
├─ proof-of-humanity-check.md
└─ ai-smell-detection-list.md

skills/09_humanization/
├─ anti-ai-copy-editing-skill.md
├─ human-tone-rewrite-skill.md
├─ concrete-detail-injection-skill.md
├─ natural-flow-editing-skill.md
├─ design-humanization-skill.md
├─ image-direction-humanization-skill.md
└─ final-human-review-skill.md

contracts/
├─ human-quality-output-contract.md
├─ validation-report-contract.md
└─ lp-structure-blueprint-contract.md

scoring/
├─ human-naturalness-scorecard.md
├─ anti-ai-smell-scorecard.md
├─ lp-structure-completeness-scorecard.md
└─ code-practicality-scorecard.md

tests/validation-scenarios/
├─ 01-hearing-first-test.md
├─ 02-minimum-agent-selection-test.md
├─ 03-emotional-cvr-reflection-test.md
├─ 04-scorecard-rejection-test.md
├─ 05-html-css-js-practicality-test.md
├─ 06-lp-structure-completeness-test.md
└─ 07-anti-ai-output-test.md

tests/expected-behaviors/
├─ hearing-first-expected.md
├─ agent-selection-expected.md
├─ emotional-cvr-expected.md
├─ scorecard-rejection-expected.md
├─ code-practicality-expected.md
├─ lp-structure-expected.md
└─ anti-ai-output-expected.md

tests/evaluation-rubrics/
├─ director-behavior-rubric.md
├─ agent-selection-rubric.md
├─ emotional-cvr-rubric.md
├─ code-quality-rubric.md
├─ lp-structure-rubric.md
└─ human-quality-rubric.md
```

## Required Content Summary

### Validation Layer

Define validation rules for:

- `director-behavior-validation.md`: lp-director must start with max 12 hearing questions and must not generate the LP immediately.
- `agent-selection-validation.md`: lp-director must select only necessary agents and save `outputs/08_review/agent-selection-log.md`.
- `emotional-cvr-validation.md`: outputs must pass emotional-cvr, benefit-clarity, expectation, and self-relevance scorecards at 85+.
- `scorecard-enforcement-validation.md`: outputs below 80 must be rejected; Critical Fail always rejects.
- `code-practicality-validation.md`: HTML/CSS/JS must be semantic, responsive, measurable, accessible, and practical.
- `lp-structure-completeness-validation.md`: verify the LP has the essential high-converting flow, with justified omissions allowed.
- `anti-ai-output-validation.md`: detect generic AI-like copy, generic hero visuals, template CTAs, weak proof, and meaningless imagery.
- `final-acceptance-validation.md`: final delivery is blocked unless all validations pass.

### LP Structure Blueprint

`high-converting-lp-flow.md` must define:

1. Traffic Intent Match
2. First View
3. Problem Recognition
4. Empathy & Stakes
5. Solution Promise
6. Mechanism
7. Benefit Expansion
8. Proof
9. Comparison
10. Offer
11. Objection Handling
12. Process
13. CTA Reinforcement
14. Final CTA
15. Post CV Expectation

### Human Quality Layer

Define how to remove AI-like outputs.

AI-like patterns to reject:

- Generic copy that applies to any company
- Overuse of vague words such as 最適化, 革新, 寄り添う, 伴走, 課題解決
- Feature lists without concrete user benefit
- Generic SaaS hero designs
- Meaningless abstract backgrounds
- Generic icons and AI-looking illustrations
- CTAs with no real reason to act

Human-quality outputs should include:

- Concrete user situations
- Realistic user anxiety
- Operational context
- Natural, non-overpolished copy
- Clear benefit before features
- Evidence that feels real
- Visuals that explain the service, not decorate it

## Update Existing Agents

Append Human Quality Responsibility and references to these agents:

- `.claude/agents/lp-director.md`
- `.claude/agents/lp-chief-copywriter.md`
- `.claude/agents/lp-sales-copywriter.md`
- `.claude/agents/lp-headline-specialist.md`
- `.claude/agents/lp-proof-copywriter.md`
- `.claude/agents/lp-faq-copywriter.md`
- `.claude/agents/lp-creative-director.md`
- `.claude/agents/lp-art-director.md`
- `.claude/agents/lp-web-designer.md`
- `.claude/agents/lp-ui-designer.md`
- `.claude/agents/lp-graphic-designer.md`
- `.claude/agents/lp-responsive-specialist.md`
- `.claude/agents/lp-frontend-engineer.md`
- `.claude/agents/lp-html-css-specialist.md`
- `.claude/agents/lp-javascript-engineer.md`
- `.claude/agents/lp-qa-lead.md`
- `.claude/agents/lp-final-gatekeeper.md`

Add this section to each relevant agent:

```md
# Human Quality Responsibility

This agent must avoid AI-like writing, structure, imagery, and design. It must create outputs with specificity, naturalness, operational context, realistic user anxiety, and service-specific visual logic.

# Required Human Quality References

- human-quality/anti-ai-writing-principles.md
- human-quality/human-copy-rules.md
- human-quality/non-generic-design-rules.md
- human-quality/image-direction-rules.md
- human-quality/ai-smell-detection-list.md
- skills/09_humanization/anti-ai-copy-editing-skill.md
- skills/09_humanization/human-tone-rewrite-skill.md
- skills/09_humanization/design-humanization-skill.md
- skills/09_humanization/image-direction-humanization-skill.md
- contracts/human-quality-output-contract.md
- scoring/human-naturalness-scorecard.md
- scoring/anti-ai-smell-scorecard.md
```

## Update lp-director

Add:

```md
## Validation Mandatory Workflow

1. Verify initial response starts with hearing questions
2. Create `outputs/08_review/agent-selection-log.md`
3. Record selected and excluded agents with reasons
4. Verify Emotional CVR Layer is reflected
5. Verify LP Structure Blueprint alignment
6. Score all major outputs
7. Reject outputs below 80
8. Run Human Quality Layer anti-AI review
9. Run Code Practicality review for HTML/CSS/JS
10. Run final-acceptance-validation before delivery

## Required Logs

- outputs/08_review/agent-selection-log.md
- outputs/08_review/validation-report.md
- outputs/08_review/scorecard-summary.md
- outputs/08_review/human-quality-review.md
- outputs/08_review/code-practicality-review.md
- outputs/08_review/final-acceptance-report.md

## Human Quality Stop Conditions

- Generic first view that applies to any company
- Abstract AI-like copy
- Meaningless hero imagery
- Unrealistic proof or case study
- Template CTA with no action reason
- Visuals unrelated to the service context
- No user anxiety or real user voice
```

## Update lp-final-gatekeeper

Add:

```md
## Final Acceptance Requirements

Do not approve final delivery unless all are met:

- director-behavior-validation passed
- agent-selection-validation passed
- emotional-cvr-validation passed
- scorecard-enforcement-validation passed
- code-practicality-validation passed
- lp-structure-completeness-validation passed
- anti-ai-output-validation passed
- lp-master-scorecard 90+
- emotional-cvr-scorecard 85+
- human-naturalness-scorecard 85+
- anti-ai-smell-scorecard 90+
- code-practicality-scorecard 85+
- No legal Critical Fail
```

## Update Documentation

Update these files:

- README.md
- CLAUDE.md
- docs/usage-guide.md
- docs/agent-operation-guide.md
- docs/lp-request-examples.md
- docs/maintenance-guide.md
- quality-gates/03-structure-gate.md
- quality-gates/04-copy-gate.md
- quality-gates/05-design-gate.md
- quality-gates/06-code-gate.md
- quality-gates/09-final-release-gate.md
- workflows/new-lp-workflow.md
- workflows/ad-lp-workflow.md
- workflows/btob-lp-workflow.md
- workflows/recruiting-lp-workflow.md
- workflows/saas-lp-workflow.md
- workflows/lp-renewal-workflow.md
- workflows/coding-workflow.md

Add references to:

- Validation Layer
- LP Structure Blueprint
- Human Quality Layer
- Anti-AI output review
- Code Practicality review
- Final acceptance validation

## Safety Rules

Do not create or commit:

- `.env`
- `.env.local`
- `.claude/settings.local.json`
- API keys
- customer secrets
- real customer names
- real confidential output files

Do not put real project outputs into `outputs/`.

## Completion Report

Create `outputs/08_review/validation-human-quality-layer-report.md` with:

- added files
- updated agents
- updated docs
- validation capabilities
- safety check
- next recommended test prompt

## Git Commands

After implementation:

```powershell
cd "C:\Users\s-tsuchiya\Desktop\Webapp\LP_Creator_Team"

git status
git add .
git commit -m "Add Validation and Human Quality Layer"
git push
```
