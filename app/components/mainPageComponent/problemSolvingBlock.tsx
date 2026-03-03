
import HumanWithProblem from '@/public/images/problems/problems_in_words.png'
import Image from 'next/image'

const problemsList = [
    'Anxiety and Stress',
    'Depression and Mood Disorders',
    'Relationship Issues',
    'Self-esteem and Confidence',
    'Grief and Loss',
    'Trauma and PTSD',
    'Work-related Stress',
    'Addiction and Substance Abuse'
]
export default function ProblemSolvingBlock() {

    // components
    const probmlemSolvingBlock = () => {
        return (
            <div>
                <details className={`list-disc list-inside mb-4 bg-subContainer p-4 rounded-large hover:bg-hover cursor-pointer `}>
                    <summary>
                        <span>Anxiety and Stress</span>
                    </summary>
                    <p>Anxiety and stress are common mental health issues that can affect anyone. They can manifest as excessive worry, restlessness, difficulty concentrating, and physical symptoms like a racing heart or muscle tension. Managing anxiety and stress often involves a combination of lifestyle changes, therapy, and sometimes medication. Techniques such as mindfulness, relaxation exercises, and cognitive-behavioral therapy (CBT) can be effective in reducing symptoms and improving overall well-being.</p>
                </details>
                <details className={`list-disc list-inside mb-4 bg-subContainer p-4 rounded-large hover:bg-hover cursor-pointer `}>
                    <summary><span>Depression and Mood Disorders</span></summary>
                    <p>Depression and mood disorders are characterized by persistent feelings of sadness, hopelessness, and a lack of interest or pleasure in activities. They can also include changes in appetite, sleep disturbances, and difficulty concentrating. Treatment for depression often involves a combination of psychotherapy, medication, and lifestyle changes. Cognitive-behavioral therapy (CBT) and interpersonal therapy (IPT) are commonly used therapeutic approaches that can help individuals manage their symptoms and improve their quality of life.</p>
                </details>
                <details className={`list-disc list-inside mb-4 bg-subContainer p-4 rounded-large hover:bg-hover cursor-pointer `}>
                    <summary><span>Relationship Issues</span></summary>
                    <p>Relationship issues can arise in various forms, including communication problems, conflicts, trust issues, and difficulties with intimacy. These issues can occur in romantic relationships, friendships, or family dynamics. Couples therapy or family therapy can be beneficial in addressing relationship issues by improving communication skills, fostering empathy, and helping individuals understand each others perspectives. Additionally, individual therapy can also be helpful for those experiencing relationship difficulties, as it can provide a safe space to explore personal feelings and develop coping strategies.</p>
                </details>
                <details className={`list-disc list-inside mb-4 bg-subContainer p-4 rounded-large hover:bg-hover cursor-pointer `}>
                    <summary><span>Self-esteem and Confidence</span></summary>
                    <p>Low self-esteem and confidence can impact various aspects of life, including relationships, work, and overall well-being. Building self-esteem often involves challenging negative self-talk, setting realistic goals, and celebrating achievements. Therapy can also be beneficial in addressing underlying issues that contribute to low self-esteem, such as past trauma or negative experiences. Techniques such as cognitive-behavioral therapy (CBT) can help individuals identify and change negative thought patterns, while also developing healthier coping strategies.</p>
                </details>
                <details className={`list-disc list-inside mb-4 bg-subContainer p-4 rounded-large hover:bg-hover cursor-pointer `}>
                    <summary><span>Grief and Loss</span></summary>
                    <p>Grief and loss are natural responses to significant life changes, such as the death of a loved one, the end of a relationship, or major life transitions. Grieving is a unique process that can involve a range of emotions, including sadness, anger, guilt, and confusion. Support from friends, family, or a therapist can be crucial in navigating the grieving process. Therapy can provide a safe space to express feelings, develop coping strategies, and find meaning in the experience of loss.</p>
                </details>
                <details className={`list-disc list-inside mb-4 bg-subContainer p-4 rounded-large hover:bg-hover cursor-pointer `}>
                    <summary><span>Trauma and PTSD</span></summary>
                    <p>Trauma can result from experiencing or witnessing a distressing event, such as physical or emotional abuse, accidents, natural disasters, or combat. Post-traumatic stress disorder (PTSD) is a mental health condition that can develop after experiencing trauma, characterized by symptoms such as flashbacks, nightmares, hypervigilance, and avoidance of reminders of the traumatic event. Treatment for trauma and PTSD often involves therapy, such as cognitive-behavioral therapy (CBT), eye movement desensitization and reprocessing (EMDR), and sometimes medication to manage symptoms.</p>
                </details>
                <details className={`list-disc list-inside mb-4 bg-subContainer p-4 rounded-large hover:bg-hover cursor-pointer `}>
                    <summary><span>Work-related Stress</span></summary>
                    <p>Work-related stress can arise from various factors, including high job demands, lack of control, poor work-life balance, and interpersonal conflicts in the workplace. Chronic work-related stress can lead to burnout, decreased productivity, and negative impacts on mental health. Strategies for managing work-related stress include setting boundaries, practicing time management, seeking support from colleagues or supervisors, and engaging in self-care activities outside of work. Therapy can also be beneficial in developing coping strategies and addressing any underlying issues contributing to work-related stress.</p>
                </details>
                <details className={`list-disc list-inside mb-4 bg-subContainer p-4 rounded-large hover:bg-hover cursor-pointer `}>
                    <summary><span>Anxiety and Depression</span></summary>
                    <p>Anxiety and depression are common mental health conditions that can significantly impact daily life. Anxiety is characterized by excessive worry, restlessness, and physical symptoms such as increased heart rate and muscle tension. Depression involves persistent feelings of sadness, loss of interest in activities, and changes in sleep and appetite. Treatment for anxiety and depression often includes therapy, such as cognitive-behavioral therapy (CBT), medication, and lifestyle changes to improve overall well-being.</p>
                </details>
            </div>
        )
    }




    //

    return (
        <div className={`grid grid-cols-2 rounded-large bg-subContainer p-6`}>
            <div>
                <h2 className={`text-2xl font-bold `}>What problems do I work with and solve?</h2>
                {probmlemSolvingBlock()}
            </div>
            <div className={`flex items-center justify-end`}>
                <Image src={HumanWithProblem} alt="Human with Problem" className=' rounded-large' />
            </div>
        </div>
    )
}
